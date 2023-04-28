import "@material-ui/core/styles";
import { StyledContainer, StyledRoot } from "./App.styles";
import ListView from "./components/ListView";
// import Wizard from "./components/Wizard/Wizard";
// import ListWizard from "./components/Wizard/ListWizard";
// import { steps } from "./components/Wizard/steps";
// import { Wizard } from "./components/Wizard";
// import CardList from "./components/Card/CardList";

const App = () => {
  return (
    <StyledRoot>
      <StyledContainer>
        {/* <CardList />; */}
        <ListView />
        {/* <ListWizard /> */}
        {/* <Wizard steps={steps} /> */}
      </StyledContainer>
    </StyledRoot>
  );
};

export default App;
