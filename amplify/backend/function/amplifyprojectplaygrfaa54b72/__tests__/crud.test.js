const { describe, expect, it } = require('@jest/globals');
const { handler } = require('../src');

// get the api.json
const testName = 'api';
const testEvent = require(`./${testName}.json`);

describe('Fetch API', () => {
  it('Output the product coming from fakestoreapi', async () => {
    const result = await handler(testEvent);

    // TODO: fetch the data

    const response = await fetch('https://fakestoreapi.com/products/1');
    const product = await response.json();

    // TODO: check the types if Create, Read, Update, Delete
    switch (testEvent.type) {
      case 'create':
        console.log('true');
        break;
      case 'read':
        console.log('true');
        break;
      case 'update':
        console.log('true');
        break;
      case 'delete':
        console.log('true');
        break;
      default:
        console.log(`Please double check the type`);
    }
    
    // TODO: 
    // console.log(testEvent.arguments.product);

    // Output: Checking if the data was correct

    expect(result).toEqual();
  });
});
