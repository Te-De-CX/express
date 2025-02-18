const express = require("express");
const router = express.Router();
const { getUsers, getUserById, createUser, updateUser,deleteUser} = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', authMiddleware, getUsers);
router.get('/:id', getUserById);
router.post('/', authMiddleware, createUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);

module.exports = router;