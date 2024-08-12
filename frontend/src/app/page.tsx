"use client";

import { useState } from "react";
import { ChakraProvider, ColorModeScript, Grid, GridItem, Show } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import theme from "./Theme";
import { GameGrid } from "./components/GameGrid";
import FormTest from "./components/FormTest";
import FetchTest from "./components/FetchTest";


function App() {
  console.log("API URL:", process.env.NEXT_PUBLIC_BACK_URL);
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
            <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" >
            ASIDE
          </GridItem>
        </Show>
        <GridItem area="main" >
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
