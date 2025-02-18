const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authControllers');

router.post('/registe', registerUser);
router.post('/login', loginUser);

module.exports = router