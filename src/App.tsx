import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1024 px
      }}
    >
      <GridItem area={"nav"}>
        <NavBar/>
      </GridItem>
      <GridItem display={{ base: "none", lg: "block"}} area={"aside"}>
        Aside
      </GridItem>
      <GridItem area={"main"}>
        <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
