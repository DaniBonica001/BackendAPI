import { Router } from 'express';
import { register, login, resetPassword, updateProfile, getProfile } from '../Controllers/customerController.js';
import isLoggedIn from '../Middleware/isLoggedIn.js';

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.post('/reset-password', resetPassword);
router.get('/profile', isLoggedIn, getProfile);
router.put('/profile', isLoggedIn, updateProfile);


export default router;


