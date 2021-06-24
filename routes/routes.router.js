import express from "express";
import ProprietarioRouter from "./proprietario.route.js";
import AnimalRouter from "./animais.route.js";

const router = express.Router();

router.use('/proprietario', ProprietarioRouter);
router.use('/animal', AnimalRouter);

export default router;