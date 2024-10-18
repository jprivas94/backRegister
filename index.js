import express from 'express';
import cors from 'cors';
import { PORT } from './config.js';

import indexRoutes from './routes/index.routes.js';
import menuRoutes from './routes/menus.routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(indexRoutes);
app.use(menuRoutes);
app.listen(PORT);

console.log(`Server is lestining on port ${PORT}`);
