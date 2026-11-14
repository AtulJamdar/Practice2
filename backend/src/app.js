import express, { Router } from 'express';
import vehicalroutes from './routes/vehical.routes.js'

const app = express();
app.use(express.json());
app.use('/api/vehicles',vehicalroutes);

export default app;

