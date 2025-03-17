import express from 'express';
import { createShortUrl, returnOriginalUrl} from '../controllers/shorten.controller.js';

const router = express.Router();



router.post('/', createShortUrl);
router.get('/:shortId', returnOriginalUrl);


export default router;