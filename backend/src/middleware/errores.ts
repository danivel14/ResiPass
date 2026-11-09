import { NextFunction, Request, Response } from 'express';

export function manejarErrores(err: Error, _req: Request, res: Response, _next: NextFunction) {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor', detalle: err.message });
}
