import express, { Router } from 'express';
import vehicalroutes from './routes/vehical.routes.js'
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/vehicles',vehicalroutes);

export default app;

