import express from "express";
import calculateRoutes from "./routes/calculateRoutes.js";

const app = express();

app.use(express.json());
app.use("/calculate", calculateRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
