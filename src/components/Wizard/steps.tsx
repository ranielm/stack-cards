import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { WizardStep } from ".";

export const steps: WizardStep[] = [
  { label: "Etapa 1", component: <StepOne /> },
  { label: "Etapa 2", component: <StepTwo /> },
  { label: "Etapa 3", component: <StepThree /> },
];
