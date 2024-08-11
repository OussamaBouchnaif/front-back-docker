"use client";

import { useState } from "react";
import { ChakraProvider, Grid, GridItem, Show } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";

function App() {
  console.log("API URL:", process.env.NEXT_PUBLIC_BACK_URL);
  return (
    <ChakraProvider>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" bg="coral">
            <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="gold">
            ASIDE
          </GridItem>
        </Show>
        <GridItem area="main" bg="blue">
          MAIN
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
