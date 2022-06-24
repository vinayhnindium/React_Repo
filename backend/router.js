import express from 'express';
import signup from './controllers/signup.js'
import login from './controllers/Login.js'

const router = express.Router();

// Register User
router.post('/signup', signup);

// Login User
router.post('/login', login);


export default router;

