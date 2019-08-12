import { Router } from 'express';
import { postLogin, postRegister, test } from '../controllers/authController';

const router = Router();

router.route('/login').post(postLogin);

router.route('/register').post(postRegister);

export default router;
