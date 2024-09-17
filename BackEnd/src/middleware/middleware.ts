import { Request, Response, NextFunction } from 'express';

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (req.session && (req.session as any).user) {
        next(); // Si la sesión está activa, continúa
    } else {
        res.status(401).json({ message: 'No autenticado' }); // Si no hay sesión, devuelve un error
    }
};
  