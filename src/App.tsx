import "@material-ui/core/styles";
import { StyledContainer, StyledRoot } from "./App.styles";
import ListView from "./components/ListView";
import Wizard from "./components/Wizard/Wizard";
import ListWizard from "./components/Wizard/ListWizard";
// import CardList from "./components/Card/CardList";

const App = () => {
  return (
    <StyledRoot>
      <StyledContainer>
        {/* <CardList />; */}
        {/* <ListView /> */}
        <ListWizard />
      </StyledContainer>
    </StyledRoot>
  );
};

export default App;
