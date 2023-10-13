import { Router } from "express";
import {
  getTurnos,
  getTurn,
  createTurnos,
  updateTurnos,
  deleteTurnos,
} from "../controllers/turnos.controller.js";

const router = Router();

// GET all Turnos
router.get("/turnos", getTurnos);

// GET An Turnos
router.get("/turnos/:id", getTurn);

// INSERT An Turnos
router.post("/turnos", createTurnos);

// PUT An Turnos
router.patch("/turnos/:id", updateTurnos);

// DELETE An Turnos
router.delete("/turnos/:id", deleteTurnos);

export default router;
