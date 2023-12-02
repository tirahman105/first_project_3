import express, { NextFunction } from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

const shenaBahini = (req: Request, res: Response, next: NextFunction) => {
  console.log('I am a shnabahini');
  next();
};

router.post('/create-student', shenaBahini, UserControllers.createStudent);

export const UserRoutes = router;
