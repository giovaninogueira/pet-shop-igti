import express from "express";
import ProprietarioController from "../controllers/proprietario.controller.js"

const router = express.Router();

router.get('/report/:id', ProprietarioController.report);

router.get('/', ProprietarioController.get.bind(ProprietarioController));
router.get('/:id', ProprietarioController.find.bind(ProprietarioController));
router.post('/', ProprietarioController.store.bind(ProprietarioController));
router.put('/:id', ProprietarioController.update.bind(ProprietarioController));
router.delete('/:id', ProprietarioController.delete.bind(ProprietarioController));

export default router;