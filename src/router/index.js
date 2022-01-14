import { Router } from 'express';
import scheduleService from '../service/schedule.js'

const router = Router();

router.get('/', scheduleService);

export default router;