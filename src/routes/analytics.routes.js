import express from 'express';
import { returnAnalytics } from '../controllers/analytics.controller.js';

const router = express.Router();


router.get('/:shortId', returnAnalytics);



export default router;