import { Router } from 'express';
import { register, login, getProfile } from '../Controllers/userController.js';
import isLoggedIn from '../Middleware/isLoggedIn.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', isLoggedIn, getProfile);

export default router;
