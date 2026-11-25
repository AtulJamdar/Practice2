import express, { Router } from 'express';
import vehicalroutes from './routes/vehical.routes.js'
import vechicalServiceroutes from './routes/vehicalService.route.js'
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/vehicles',vehicalroutes);
app.use('/api/services',vechicalServiceroutes);

export default app;

