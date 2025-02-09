import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import StepperComponent from "./StepperComponent";

const Welcome = () => {
  const [started, setStarted] = useState(false);

  return (
    <>
      {started ? (
        <StepperComponent />
      ) : (
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            background: "linear-gradient(135deg, #1d3557, #457b9d)",
            color: "#fff",
            padding: 4,
          }}
        >
          <Typography variant="h3" fontWeight="bold">
            Get Fit, Stay Motivated! 💪
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, opacity: 0.9 }}>
            Track your fitness goals, stay on course, and make this year your healthiest yet!
          </Typography>

          <FitnessCenterIcon sx={{ fontSize: 80, mt: 3, color: "#F4A261" }} />

          <Button
            variant="contained"
            sx={{
              mt: 4,
              fontSize: "1.2rem",
              padding: "12px 30px",
              borderRadius: "30px",
              backgroundColor: "#F4A261",
              "&:hover": { backgroundColor: "#E76F51" },
            }}
            onClick={() => setStarted(true)}
          >
            Start Now 🚀
          </Button>
        </Box>
      )}
    </>
  );
};

export default Welcome;
