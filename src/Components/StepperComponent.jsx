import { useState } from "react";
import { Box, Button, Step, StepLabel, Stepper, Typography } from "@mui/material";
import PersonalInfo from "./PersonalInfo";
import FitnessStatus from "./FitnessStatus";
import HealthAndLifestyle from "./HealthAndLifestyle";
import WorkoutAndNutrition from "./WorkoutAndNutrition";

const steps = ["Basic Info", "Current Fitness", "Health & Lifestyle", "Workout & Nutrition"];

const StepperComponent = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    fitnessGoal: "",
    height: "",
    weight: "",
    activityLevel: "",
    stepCount: "",
    waterIntake: "",
    sleepHours: "",
    dietPreference: "",
    medicalConditions: "",
    workoutType: "",
    workoutFrequency: "",
    needDietPlan: "",
  });

  const nextStep = (values) => {
    setFormData((prev) => ({ ...prev, ...values }));
    setActiveStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => setActiveStep((prevStep) => prevStep - 1);

  const submitForm = (values) => {
    setFormData((prev) => ({ ...prev, ...values }));
    console.log("Final Form Data:", { ...formData, ...values });
    alert("Form Submitted Successfully!");
  };

  return (
    <Box sx={{ width: "60%", mx: "auto", mt: 5 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 5, textAlign: "center" }}>
        {activeStep === 0 && <PersonalInfo nextStep={nextStep} />}
        {activeStep === 1 && <FitnessStatus nextStep={nextStep} prevStep={prevStep} />}
        {activeStep === 2 && <HealthAndLifestyle nextStep={nextStep} prevStep={prevStep} />}
        {activeStep === 3 && <WorkoutAndNutrition prevStep={prevStep} submitForm={submitForm} />}
      </Box>

      {activeStep === steps.length && (
        <Typography variant="h5" sx={{ mt: 5, textAlign: "center" }}>
          🎉 Thank you for completing the setup!
        </Typography>
      )}
    </Box>
  );
};

export default StepperComponent;
