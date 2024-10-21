import { Router } from 'express';
import user from './user.router.js';

const router = Router();

router.use('/api', user)

export default router;