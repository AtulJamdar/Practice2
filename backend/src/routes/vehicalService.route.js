import { createService, getAllServices, updateService, deleteService } from '../controllers/vehicalService.controller.js';
import express from 'express';

const router = express.Router();

router.post('/',createService);
router.get('/',getAllServices);
router.put('/:id',updateService);
router.delete('/:id',deleteService);

export default router;