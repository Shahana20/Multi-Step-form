import { Box, Button, TextField, MenuItem, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const PersonalInfo = ({ nextStep }) => {
  const formik = useFormik({
    initialValues: { name: "", age: "", gender: "", goal: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      age: Yup.number().positive().integer().required("Required"),
      gender: Yup.string().required("Required"),
      goal: Yup.string().required("Required"),
    }),
    onSubmit: () => nextStep(),
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ width: 300 }}>
      <Typography variant="h5">Personal Information</Typography>

      <TextField label="Name" {...formik.getFieldProps("name")} fullWidth sx={{ mt: 2 }} />
      <TextField label="Age" type="number" {...formik.getFieldProps("age")} fullWidth sx={{ mt: 2 }} />
      
      <TextField select label="Gender" {...formik.getFieldProps("gender")} fullWidth sx={{ mt: 2 }}>
        <MenuItem value="Male">Male</MenuItem>
        <MenuItem value="Female">Female</MenuItem>
        <MenuItem value="Other">Other</MenuItem>
      </TextField>

      <TextField select label="Fitness Goal" {...formik.getFieldProps("goal")} fullWidth sx={{ mt: 2 }}>
        <MenuItem value="Lose Weight">Lose Weight</MenuItem>
        <MenuItem value="Gain Muscle">Gain Muscle</MenuItem>
        <MenuItem value="Stay Active">Stay Active</MenuItem>
      </TextField>

      <Button type="submit" variant="contained" sx={{ mt: 3 }}>Next</Button>
    </Box>
  );
};

export default PersonalInfo;
