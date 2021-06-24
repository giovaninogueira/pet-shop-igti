import express from "express";
import AnimalController from "../controllers/animal.controller.js";

const router = express.Router();

router.get('/', AnimalController.get.bind(AnimalController));
router.get('/:id', AnimalController.find.bind(AnimalController));
router.post('/', AnimalController.store.bind(AnimalController));
router.put('/:id', AnimalController.update.bind(AnimalController));
router.delete('/:id', AnimalController.delete.bind(AnimalController));

export default router;