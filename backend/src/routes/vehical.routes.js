import {createVehical,getAllVehical} from "../controllers/vehical.controller.js";
import express from 'express';

const router = express.Router();

router.post('/', createVehical);
router.get('/', getAllVehical);

export default router;