import { createService, getAllServices, updateService, deleteService } from '../controllers/vehicalService.controller.js';
import express from 'express';

const router = express.Router();

router.get('/',createService);
router.get('/',getAllServices);
router.get('/:id',updateService);
router.get('/:id',deleteService);

export default router;