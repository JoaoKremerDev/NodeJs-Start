type Product = {
    title: string;
    price: number;
};

const data: Product[] = [
    { title: 'Produto X', price: 10 },
    { title: 'Produto Y', price: 15 },
    { title: 'Produto Z', price: 20 },
    { title: 'Produto T', price: 22 },
];

export const Product = {
    getAll: (): Product[] => {
        return data;
    },
    getFromPricecAfter: (price: number): Product[] => {
        return data.filter((item) => item.price >= price )
    }
}