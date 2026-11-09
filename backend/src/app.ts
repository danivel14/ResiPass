import cors from 'cors';
import express from 'express';
import { env } from './config/env';
import { manejarErrores } from './middleware/errores';
import residenciasRoutes from './routes/residencias.routes';

const app = express();

app.use(cors({ origin: env.corsOrigin }));
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ estado: 'ok', servicio: 'resipass-backend' });
});

app.use('/api/residencias', residenciasRoutes);

app.use(manejarErrores);

export default app;
