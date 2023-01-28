import express from "express";
import config from "./config";
import bp from 'body-parser';

import clientRoutes from './routes/clients.router';
const app = express();


// settings
app.set('port', config.port)
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(clientRoutes)


export default app;