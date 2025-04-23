import { NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

export default class LogMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`${req.method} en ${req.url} recibido`);
    next();
  }
}
