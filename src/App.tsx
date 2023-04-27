import "@material-ui/core/styles";
import { StyledContainer, StyledRoot } from "./App.styles";
import ListView from "./components/ListView";
// import CardList from "./components/Card/CardList";

const App = () => {
  return (
    <StyledRoot>
      <StyledContainer>
        {/* <CardList />; */}
        <ListView />
      </StyledContainer>
    </StyledRoot>
  );
};

export default App;
