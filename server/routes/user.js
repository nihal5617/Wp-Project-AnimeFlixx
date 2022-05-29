import express from 'express';

import { signin,signuphere } from '../controllers/user.js';

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signuphere);

export default router;