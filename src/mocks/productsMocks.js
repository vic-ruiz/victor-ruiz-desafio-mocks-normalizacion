import { faker } from '@faker-js/faker';

class ProductsMock {

    constructor(quantity) {
        this.quantity = quantity;
    }
    randomProducts() {
        const randomProducts = [];
        
        for (let i = 0; i < this.quantity; i++) {
            const randomProduct = {
                id: faker.datatype.uuid(),
                title: faker.commerce.product(),
                price: faker.datatype.number({min: 1000, max: 10000}),
                image: faker.image.imageUrl(20,20,'sneaker', true)
            }
            randomProducts.push(randomProduct);        
        }
        return randomProducts;
    }
}

export default ProductsMock;