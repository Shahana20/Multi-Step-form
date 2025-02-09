import { Box, Button, TextField, MenuItem, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const PersonalInfo = ({ nextStep, formData }) => {
  const formik = useFormik({
    initialValues: formData || { name: "", age: "", gender: "", goal: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      age: Yup.number().positive().integer().required("Age is required"),
      gender: Yup.string().required("Gender is required"),
      goal: Yup.string().required("Fitness goal is required"),
    }),
    onSubmit: (values) => {
        console.log("Personal Info Submitted:", values);
        nextStep(values);
      }
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ width: 300 }}>
      <Typography variant="h5">Personal Information</Typography>

      <TextField
        label="Name"
        {...formik.getFieldProps("name")}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        fullWidth
        sx={{ mt: 2 }}
      />

      <TextField
        label="Age"
        type="number"
        {...formik.getFieldProps("age")}
        error={formik.touched.age && Boolean(formik.errors.age)}
        helperText={formik.touched.age && formik.errors.age}
        fullWidth
        sx={{ mt: 2 }}
      />

      <TextField
        select
        label="Gender"
        {...formik.getFieldProps("gender")}
        error={formik.touched.gender && Boolean(formik.errors.gender)}
        helperText={formik.touched.gender && formik.errors.gender}
        fullWidth
        sx={{ mt: 2 }}
      >
        <MenuItem value="Male">Male</MenuItem>
        <MenuItem value="Female">Female</MenuItem>
        <MenuItem value="Other">Other</MenuItem>
      </TextField>

      <TextField
        select
        label="Fitness Goal"
        {...formik.getFieldProps("goal")}
        error={formik.touched.goal && Boolean(formik.errors.goal)}
        helperText={formik.touched.goal && formik.errors.goal}
        fullWidth
        sx={{ mt: 2 }}
      >
        <MenuItem value="Lose Weight">Lose Weight</MenuItem>
        <MenuItem value="Gain Muscle">Gain Muscle</MenuItem>
        <MenuItem value="Stay Active">Stay Active</MenuItem>
      </TextField>

      <Button type="submit" variant="contained" sx={{ mt: 3 }}>
        Next
      </Button>
    </Box>
  );
};

export default PersonalInfo;
