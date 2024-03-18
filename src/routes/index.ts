import { Router } from 'express';
import * as HomeController from '../controllers/home.controller'
import * as InfoController from '../controllers/info.controler'
import * as UserController from '../controllers/user.controller'

const router = Router();

router.get('/', HomeController.Home);
router.get('/contato', InfoController.contato);
router.get('/sobre', InfoController.sobre);

router.get('/nome', UserController.nome)
router.get('/idade', UserController.idadeForm); 
router.post('/idade-resultado', UserController.idadePost)

export default router;