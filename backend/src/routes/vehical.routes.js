import {createVehical,getAllVehical, updateVehical, deleteVehical} from "../controllers/vehical.controller.js";
import express from 'express';

const router = express.Router();

router.post('/', createVehical);
router.get('/', getAllVehical);
router.put('/:id',updateVehical);
router.delete('/:id',deleteVehical);

export default router;