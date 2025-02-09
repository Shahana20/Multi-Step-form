import { Box, Button, TextField, MenuItem, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const FitnessStatus = ({ nextStep, prevStep, formData }) => {
  const formik = useFormik({
    initialValues: formData || {
      height: "",
      weight: "",
      activityLevel: "",
      stepCount: "",
    },
    validationSchema: Yup.object({
      height: Yup.number()
        .positive("Enter a valid height")
        .required("Height is required"),
      weight: Yup.number()
        .positive("Enter a valid weight")
        .required("Weight is required"),
      activityLevel: Yup.string().required("Activity Level is required"),
      stepCount: Yup.number()
        .positive("Enter a valid step count")
        .required("Step count is required"),
    }),
    onSubmit: (values) => {
      console.log("Fitness Status Submitted:", values); 
      nextStep(values);
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ width: 300 }}>
      <Typography variant="h5">Fitness Status</Typography>

      <TextField
        label="Height (cm)"
        type="number"
        {...formik.getFieldProps("height")}
        error={formik.touched.height && Boolean(formik.errors.height)}
        helperText={formik.touched.height && formik.errors.height}
        fullWidth
        sx={{ mt: 2 }}
      />

      <TextField
        label="Weight (kg)"
        type="number"
        {...formik.getFieldProps("weight")}
        error={formik.touched.weight && Boolean(formik.errors.weight)}
        helperText={formik.touched.weight && formik.errors.weight}
        fullWidth
        sx={{ mt: 2 }}
      />

      <TextField
        select
        label="Activity Level"
        {...formik.getFieldProps("activityLevel")}
        error={formik.touched.activityLevel && Boolean(formik.errors.activityLevel)}
        helperText={formik.touched.activityLevel && formik.errors.activityLevel}
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
        error={formik.touched.stepCount && Boolean(formik.errors.stepCount)}
        helperText={formik.touched.stepCount && formik.errors.stepCount}
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
