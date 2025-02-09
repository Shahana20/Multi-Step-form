import { Box, Button, TextField, MenuItem, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const HealthAndLifestyle = ({ nextStep, prevStep }) => {
  const formik = useFormik({
    initialValues: {
      waterIntake: "",
      sleepHours: "",
      dietaryPreference: "",
      medicalConditions: "",
    },
    validationSchema: Yup.object({
      waterIntake: Yup.number()
        .min(0, "Enter a valid amount")
        .required("Required"),
      sleepHours: Yup.number()
        .min(0, "Enter a valid number of hours")
        .max(24, "Must be less than 24")
        .required("Required"),
      dietaryPreference: Yup.string().required("Required"),
    }),
    onSubmit: () => nextStep(),
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ width: 300 }}>
      <Typography variant="h5">Health & Lifestyle</Typography>

      <TextField
        label="Water Intake (Liters/Day)"
        type="number"
        {...formik.getFieldProps("waterIntake")}
        fullWidth
        sx={{ mt: 2 }}
      />

      <TextField
        label="Sleep Hours (Per Night)"
        type="number"
        {...formik.getFieldProps("sleepHours")}
        fullWidth
        sx={{ mt: 2 }}
      />

      <TextField
        select
        label="Dietary Preference"
        {...formik.getFieldProps("dietaryPreference")}
        fullWidth
        sx={{ mt: 2 }}
      >
        <MenuItem value="Vegetarian">Vegetarian</MenuItem>
        <MenuItem value="Non-Vegetarian">Non-Vegetarian</MenuItem>
        <MenuItem value="Vegan">Vegan</MenuItem>
      </TextField>

      <TextField
        label="Medical Conditions (Optional)"
        {...formik.getFieldProps("medicalConditions")}
        fullWidth
        sx={{ mt: 2 }}
      />

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Button variant="outlined" onClick={prevStep}>Back</Button>
        <Button type="submit" variant="contained">Next</Button>
      </Box>
    </Box>
  );
};

export default HealthAndLifestyle;
