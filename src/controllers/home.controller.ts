import { Request, Response } from 'express';

export const Home = (req: Request, res: Response) => {
    let showOld: boolean = false;
    let age: number = 51;
    if (age > 50) {
        showOld = true;
    }

    res.render('pages/home', {
        name: 'João',
        age: 25,
        lastname: 'Kremer',
        showOld,
        products: [
            {title: 'Produto X', price: 10},
            {title: 'Produto Y', price: 15},
            {title: 'Produto Z', price: 20},
        ],
        frasesDoDia: []
    });
};
