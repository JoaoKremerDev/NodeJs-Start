import { Request, Response } from 'express';
import { Product } from '../models/Product';

export const Home = (req: Request, res: Response) => {
    let showOld: boolean = false;
    let age: number = 51;
    if (age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPricecAfter(16);

    res.render('pages/home', {
        name: 'João',
        age: 25,
        lastname: 'Kremer',
        showOld,
        products: list,
        expensiveList: expensiveList,
        frasesDoDia: []
    });
};
