
import express from 'express';
import { createUser,getUsersByNivel,updateUserDetails ,deleteUser, autenticacion} from '../controller/aspirantesController.js';

const router = express.Router();

router.post('/api/login', autenticacion);

router.post('/registro', createUser);

router.get('/usuarios/:nivel', getUsersByNivel);

router.put('/actualizar/:id', updateUserDetails );

router.delete('/eliminar/usuario/:id', deleteUser);

export default router;
