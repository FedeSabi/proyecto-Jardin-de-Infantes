
import express from 'express';
import { createUser,getUsersByNivel,updateUserDetails ,deleteUser} from '../controller/aspirantesController.js';

const router = express.Router();



router.post('/crear/usuarios', createUser);

router.get('/usuarios/:nivel', getUsersByNivel);

router.post('/actualizar/:id', updateUserDetails );

router.delete('/eliminar/usuario/:id', deleteUser);

export default router;
