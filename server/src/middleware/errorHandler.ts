'use strict';

import { NextFunction, Request, Response } from 'express';

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error(err);

  const statusCode = (err as any)?.statusCode ?? 500;
  const message = (err as any)?.message ?? 'Internal Server Error';

  res.status(statusCode).json({ success: false, message });
}
