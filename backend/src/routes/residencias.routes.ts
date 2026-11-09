import { Router } from 'express';
import { listar } from '../controllers/residencias.controller';

const router = Router();

router.get('/', listar);

export default router;
