import { Box, Button, TextField, MenuItem, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const WorkoutAndNutrition = ({ prevStep, submitForm }) => {
  const formik = useFormik({
    initialValues: {
      workoutType: "",
      workoutFrequency: "",
      needDietPlan: "",
    },
    validationSchema: Yup.object({
      workoutType: Yup.string().required("Required"),
      workoutFrequency: Yup.number()
        .min(1, "Must be at least once per week")
        .max(7, "Cannot be more than 7 days")
        .required("Required"),
      needDietPlan: Yup.string().required("Required"),
    }),
    onSubmit: submitForm,
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ width: 300 }}>
      <Typography variant="h5">Workout & Nutrition</Typography>

      <TextField
        select
        label="Preferred Workout Type"
        {...formik.getFieldProps("workoutType")}
        fullWidth
        sx={{ mt: 2 }}
      >
        <MenuItem value="Gym">Gym</MenuItem>
        <MenuItem value="Yoga">Yoga</MenuItem>
        <MenuItem value="Home Workouts">Home Workouts</MenuItem>
        <MenuItem value="Running">Running</MenuItem>
      </TextField>

      <TextField
        label="Workout Frequency (Days/Week)"
        type="number"
        {...formik.getFieldProps("workoutFrequency")}
        fullWidth
        sx={{ mt: 2 }}
      />

      <TextField
        select
        label="Do you need a diet plan?"
        {...formik.getFieldProps("needDietPlan")}
        fullWidth
        sx={{ mt: 2 }}
      >
        <MenuItem value="Yes">Yes</MenuItem>
        <MenuItem value="No">No</MenuItem>
      </TextField>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Button variant="outlined" onClick={prevStep}>Back</Button>
        <Button type="submit" variant="contained">Finish</Button>
      </Box>
    </Box>
  );
};

export default WorkoutAndNutrition;
