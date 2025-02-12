import express from 'express';
import { createShortUrl, returnOriginalUrl } from '../controllers/url.controller.js';

const router = express.Router();

router.post('/shorten', createShortUrl);
router.get('/:shortId', returnOriginalUrl)

export default router;

