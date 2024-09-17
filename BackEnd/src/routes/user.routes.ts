import { Router } from 'express';
import { createUser, getAllUsers, getUserById, updateUser, deleteUser,login } from '../controller/user.controller';
import   { isAuthenticated } from '../middleware/middleware';
import { log } from 'console';
const router = Router();

// Rutas para usuarios
router.post('/', isAuthenticated , createUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/login', login);
export default router;
