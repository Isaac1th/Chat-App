import { register } from '../controllers/usersController.js';

import express from 'express';
const router = express.Router();

router.get('/', () => {
  res.send('welcome to the chat app');
});
router.post('/register', register);

export default router;
