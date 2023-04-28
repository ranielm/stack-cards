import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  progressBar: {
    backgroundColor: "#f2f2f2",
    height: 20,
    borderRadius: 10,
    position: "relative",
  },
  progressBarFill: {
    backgroundColor: "#2196f3",
    height: "100%",
    borderRadius: 10,
    transition: "width 0.5s",
  },
  progressBarLabel: {
    position: "absolute",
    top: -30,
    left: 0,
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
  },
}));

interface WizardStep {
  label: string;
  content: JSX.Element;
}

interface WizardProps {
  steps: WizardStep[];
}

export const WizardTopProgress = ({ steps }: WizardProps) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <div className={classes.progressBar}>
        <div
          className={classes.progressBarFill}
          style={{ width: `${(activeStep / steps.length) * 100}%` }}
        />
        <Typography variant="h6" className={classes.progressBarLabel}>
          {steps[activeStep].label}
        </Typography>
      </div>
      <Stepper activeStep={activeStep}>
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              O wizard foi concluído.
            </Typography>
            <Button onClick={() => setActiveStep(0)}>Reiniciar</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {steps[activeStep].content}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Voltar
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Concluir" : "Próximo"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
