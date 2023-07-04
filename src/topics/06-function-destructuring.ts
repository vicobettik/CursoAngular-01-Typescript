export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Nokia",
    price: 150.0
};

const tablet: Product = {
    description: "iPad air",
    price: 1146.0
};

export interface TaxCalculationOptions{
    tax: number;
    products: Product[]
}

export const taxCalculation = (options: TaxCalculationOptions): [number, number] => {
    const {tax, products} = options;
    let total = 0;
    products.forEach(({price}) => {
        total += price;
    });

    return [total, total*tax];
}

const shoppinCart = [phone,tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculation(
    {
        products: shoppinCart,
        tax
    }
);

// console.log(`Total: ${total}, Tax:${taxTotal}`);
