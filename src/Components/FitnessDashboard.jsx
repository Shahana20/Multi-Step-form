import { useLocation } from "react-router-dom";
import { Box, Typography, Card, CardContent, LinearProgress, Divider } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import HotelIcon from "@mui/icons-material/Hotel";

const FitnessDashboard = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};

  const { height, weight, activityLevel, stepCount, waterIntake, sleepHours } = formData;

  const bmi = weight && height ? (weight / ((height / 100) * (height / 100))).toFixed(1) : "--";
  const bmiStatus =
    bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal" : bmi < 30 ? "Overweight" : "Obese";

  const activityData = [
    { name: "Steps Taken", value: stepCount || 0 },
    { name: "Remaining", value: Math.max(10000 - (stepCount || 0), 0) },
  ];
  const COLORS = ["#0088FE", "#FFBB28"];

  return (
    <Box sx={{ p: 4, textAlign: "center", maxWidth: "900px", mx: "auto" }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold", color: "#1976D2" }}>
        Fitness Dashboard
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        
        <Card sx={{ width: 250, textAlign: "center", p: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6">BMI</Typography>
            <FitnessCenterIcon sx={{ fontSize: 40, color: "#D32F2F" }} />
            <Typography
              variant="h4"
              color={bmiStatus === "Normal" ? "green" : "red"}
              sx={{ fontWeight: "bold" }}
            >
              {bmi}
            </Typography>
            <Typography variant="body2">Status: {bmiStatus}</Typography>
            <LinearProgress
              variant="determinate"
              value={(bmi / 30) * 100}
              sx={{ mt: 1, height: 8, borderRadius: 4, backgroundColor: "#E3F2FD" }}
            />
          </CardContent>
        </Card>

       
        <Card sx={{ width: 250, textAlign: "center", p: 2, boxShadow: 3 }}>
          <CardContent>
            <LocalDrinkIcon sx={{ fontSize: 40, color: "#0288D1" }} />
            <Typography variant="h6">Water Intake</Typography>
            <Typography
              variant="h4"
              color={waterIntake >= 2 ? "green" : "red"}
              sx={{ fontWeight: "bold" }}
            >
              {waterIntake}L
            </Typography>
            <Typography variant="body2">Recommended: 2-3L</Typography>
            <LinearProgress
              variant="determinate"
              value={(waterIntake / 3) * 100}
              sx={{ mt: 1, height: 8, borderRadius: 4, backgroundColor: "#E3F2FD" }}
            />
          </CardContent>
        </Card>

        
        <Card sx={{ width: 250, textAlign: "center", p: 2, boxShadow: 3 }}>
          <CardContent>
            <HotelIcon sx={{ fontSize: 40, color: "#8E24AA" }} />
            <Typography variant="h6">Sleep Hours</Typography>
            <Typography
              variant="h4"
              color={sleepHours >= 7 ? "green" : "red"}
              sx={{ fontWeight: "bold" }}
            >
              {sleepHours}h
            </Typography>
            <Typography variant="body2">Recommended: 7-9h</Typography>
            <LinearProgress
              variant="determinate"
              value={(sleepHours / 9) * 100}
              sx={{ mt: 1, height: 8, borderRadius: 4, backgroundColor: "#E3F2FD" }}
            />
          </CardContent>
        </Card>
      </Box>

      <Divider sx={{ my: 4 }} />

      
      <Box sx={{ display: "flex", justifyContent: "center", gap: 4, flexWrap: "wrap" }}>
        
        <Card sx={{ width: 300, textAlign: "center", p: 3, boxShadow: 3 }}>
          <CardContent>
            <DirectionsWalkIcon sx={{ fontSize: 40, color: "#FF5722" }} />
            <Typography variant="h6">Steps Count</Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#0288D1" }}>
              {stepCount || 0}
            </Typography>
            <Typography variant="body2">Goal: 10,000 Steps</Typography>
            <LinearProgress
              variant="determinate"
              value={(stepCount / 10000) * 100}
              sx={{ mt: 1, height: 8, borderRadius: 4, backgroundColor: "#E3F2FD" }}
            />
          </CardContent>
        </Card>

        <Card sx={{ width: 350, p: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Activity Breakdown
            </Typography>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={activityData} cx="50%" cy="50%" outerRadius={90} fill="#8884d8" dataKey="value">
                  {activityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Activity Level: <span style={{ color: "#1976D2" }}>{activityLevel || "N/A"}</span>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default FitnessDashboard;
