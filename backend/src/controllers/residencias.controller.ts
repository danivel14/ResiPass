import { NextFunction, Request, Response } from 'express';
import { listarResidencias } from '../services/residencias.service';

export async function listar(_req: Request, res: Response, next: NextFunction) {
  try {
    const data = await listarResidencias();
    res.json({ data });
  } catch (err) {
    next(err);
  }
}
