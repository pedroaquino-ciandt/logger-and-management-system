const { expect } = require('chai');
const { sortProducts } = require('./inventoryManagement');

describe('sortProducts', () => {
    it('should sort products by name in ascending order', () => {
        const products = [
            {"name": "Product C", "price": 50, "stock": 10},
            {"name": "Product A", "price": 100, "stock": 5},
            {"name": "Product B", "price": 200, "stock": 3}
        ];
        const sortKey = 'name';
        const isAscending = true;
        const sortedProducts = sortProducts(products, sortKey, isAscending);
        const expectedOutput = [
            {"name": "Product A", "price": 100, "stock": 5},
            {"name": "Product B", "price": 200, "stock": 3},
            {"name": "Product C", "price": 50, "stock": 10}
        ];
        expect(sortedProducts).to.deep.equal(expectedOutput);
    });

    it('should sort products by price in descending order', () => {
        const products = [
            {"name": "Product A", "price": 100, "stock": 5},
            {"name": "Product B", "price": 200, "stock": 3},
            {"name": "Product C", "price": 50, "stock": 10}
        ];
        const sortKey = 'price';
        const isAscending = false;
        const sortedProducts = sortProducts(products, sortKey, isAscending);
        const expectedOutput = [
            {"name": "Product B", "price": 200, "stock": 3},
            {"name": "Product A", "price": 100, "stock": 5},
            {"name": "Product C", "price": 50, "stock": 10}
        ];
        expect(sortedProducts).to.deep.equal(expectedOutput);
    });

    it('should sort products by stock in ascending order', () => {
        const products = [
            {"name": "Product A", "price": 100, "stock": 5},
            {"name": "Product B", "price": 200, "stock": 3},
            {"name": "Product C", "price": 50, "stock": 10}
        ];
        const sortKey = 'stock';
        const isAscending = true;
        const sortedProducts = sortProducts(products, sortKey, isAscending);
        const expectedOutput = [
            {"name": "Product B", "price": 200, "stock": 3},
            {"name": "Product A", "price": 100, "stock": 5},
            {"name": "Product C", "price": 50, "stock": 10}
        ];
        expect(sortedProducts).to.deep.equal(expectedOutput);
    });
});
