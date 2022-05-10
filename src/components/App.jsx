import { Container } from "@mui/material";
import React from "react";
import CoffeesList from "./coffeesList";
import Header from "./Header";

function App() {
  return (
    <>
      <Container>
        <Header />
        <CoffeesList />
      </Container>
    </>
  );
}

export default App;
