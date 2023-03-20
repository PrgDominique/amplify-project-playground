const { describe, expect, it } = require('@jest/globals');
const { handler } = require('../src');

describe('Fetch API', () => {
  it('Output the product coming from fakestoreapi', async () => {
    // TODO: fetch the data
    const response = await fetch('https://fakestoreapi.com/products/1');
    const product = await response.json();
    await handler();

    console.log(product);
    // Output: Checking if the data was correct
    expect(product.id).toBe(1);
    expect(product.title).toBe('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
    expect(product.price).toBe(109.95);
  });
});



// reference

// const testName = 'api';
// const testEvent = require(`./${testName}.json`);

// const Products = async () => {
//   const json = await response.json();
//   return json;
// };

//   it('Output the product coming from fakestoreapi', async () => {
//     const result = await handler(testEvent);
//     const expectedOutput = await Products();
//     expect(result).toBe(expectedOutput);
//   });
// });
