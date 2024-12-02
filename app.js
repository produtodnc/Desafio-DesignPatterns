const express = require("express");
const CalculationController = require("./controllers/CalculationController");

const app = express();

app.get("/calculate", CalculationController.calculate);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
