import { Router } from 'express';
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from '../controller/user.controller';

const router = Router();

// Rutas para usuarios
router.post('/', createUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
