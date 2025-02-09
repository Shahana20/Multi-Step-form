import { Box, Button, TextField, MenuItem, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const FitnessStatus = ({ nextStep, prevStep }) => {
  const formik = useFormik({
    initialValues: {
      height: "",
      weight: "",
      activityLevel: "",
      stepCount: "",
    },
    validationSchema: Yup.object({
      height: Yup.number().positive("Enter a valid height").required("Required"),
      weight: Yup.number().positive("Enter a valid weight").required("Required"),
      activityLevel: Yup.string().required("Required"),
      stepCount: Yup.number().positive("Enter a valid step count").required("Required"),
    }),
    onSubmit: () => nextStep(),
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ width: 300 }}>
      <Typography variant="h5">Fitness Status</Typography>

      <TextField
        label="Height (cm)"
        type="number"
        {...formik.getFieldProps("height")}
        fullWidth
        sx={{ mt: 2 }}
      />
      
      <TextField
        label="Weight (kg)"
        type="number"
        {...formik.getFieldProps("weight")}
        fullWidth
        sx={{ mt: 2 }}
      />

      <TextField
        select
        label="Activity Level"
        {...formik.getFieldProps("activityLevel")}
        fullWidth
        sx={{ mt: 2 }}
      >
        <MenuItem value="Sedentary">Sedentary</MenuItem>
        <MenuItem value="Lightly Active">Lightly Active</MenuItem>
        <MenuItem value="Moderately Active">Moderately Active</MenuItem>
        <MenuItem value="Very Active">Very Active</MenuItem>
      </TextField>

      <TextField
        label="Daily Step Count"
        type="number"
        {...formik.getFieldProps("stepCount")}
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

export default FitnessStatus;
