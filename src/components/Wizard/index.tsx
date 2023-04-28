import { useState } from "react";
import { MobileStepper, Button } from "@material-ui/core";

export interface WizardStep {
  label: string;
  component: JSX.Element;
}

export interface WizardProps {
  steps: WizardStep[];
}

export const Wizard: React.FC<WizardProps> = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      {steps[activeStep].component}

      <MobileStepper
        variant="progress"
        steps={steps.length}
        position="bottom"
        activeStep={activeStep}
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            Voltar
          </Button>
        }
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === steps.length - 1}
          >
            Próximo
          </Button>
        }
      />
    </>
  );
};
