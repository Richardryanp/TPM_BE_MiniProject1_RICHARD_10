import express from "express";
import { getCoffees, addCoffee } from "../controllers/apiController.js";
import { validateCoffee } from "../middlewares/validator.js";

const router = express.Router();

router.get("/coffees", getCoffees);
router.post("/coffees", validateCoffee, addCoffee);

export default router;
