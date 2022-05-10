import React, { useState, useEffect } from "react";
import CoffeeItem from "./coffeeItem";
import { Grid } from "@mui/material";

const CoffeesList = () => {
  const [coffee, setCoffee] = useState(null);
  const [status, setStatus] = useState("Loading...");

  // Инициизация запроса при рендере страницы
  useEffect(() => {
    getCoffee();
  }, []);

  //Получение данных и отсечение ошибок
  const COFFEE_URL =
    "https://random-data-api.com/api/coffee/random_coffee?size=20";

  async function getCoffee() {
    try {
      const response = await fetch(COFFEE_URL);
      if (!response.ok) {
        throw new Error("Ошибка в получении данных");
      }
      const coffees = await response.json();
      if (coffees.length === 0) {
        throw new Error("Нечего отображать :(");
      }
      setStatus("Completed");
      setCoffee(coffees);
    } catch (error) {
      setStatus(error.message);
    }
  }

  return (
    <>
      <Grid
        container
        spacing={5}
        sx={{ mt: 8, mb: 3, justifyContent: "center" }}
      >
        {status === "Completed" ? (
          coffee.map((coffee) => <CoffeeItem key={coffee.id} coffee={coffee} />)
        ) : (
          <h3>{status}</h3>
        )}
      </Grid>
    </>
  );
};

export default CoffeesList;
