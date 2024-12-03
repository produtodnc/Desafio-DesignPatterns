import express from "express";
import { calculateHandler } from "../controllers/calculateController.js";
import { validateCalculateParams } from "../middlewares/validationMiddleware.js";

const router = express.Router();

router.get("/", validateCalculateParams, calculateHandler);

export default router;
