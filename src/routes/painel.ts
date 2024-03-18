import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, rest: Response) => {
    rest.send('Home do Painel!');
});

router.get('/noticias', (req: Request, rest: Response) => {
    rest.send('Lista de notícias cadastradas');
});




export default router;

