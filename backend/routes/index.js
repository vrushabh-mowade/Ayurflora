import express from 'express';
import userrouter from './user.js';
import plantrouter from './plant.js';

const router = express.Router();

router.use('/user',userrouter);
router.use("/plant",plantrouter);

export default router;
