const { describe, it } = require('@jest/globals');
const { handler } = require('../src');
const mockData = require('./mock.data');
const fetch = require('node-fetch');

let result;
// jest.mock('node-fetch');

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockData),
  }),
);

describe('this would return a value', () => {
  // it('return once ', () => {
  //   const mockCallback = jest.fn();

  //   sampleTest(mockCallback);
  //   console.log(mockCallback.mock.calls[0][0]);
  //   expect(mockCallback.mock.calls.length).toBe(1);
  //   expect(mockCallback.mock.calls[0][0]).toBe(1);

  //   // Mock the callback function again with a different value
  //   mockCallback.mockImplementationOnce(count => {
  //     console.log(` The counter is now ${count}`);
  //     expect(count).toBe(2);
  //   });

  //   sampleTest(mockCallback);
  //   mockCallback.mockImplementationOnce(count => {
  //     console.log(` The counter is now ${count}`);
  //   });

  //   // Call the incrementCounter function with the new mock callback
  //   sampleTest(mockCallback);
  //   sampleTest(count => {
  //     console.log(`The counter is now ${count}`);
  //   });

  //   console.log(mockCallback.mock.calls);
  //   // Assert that the callback was called with the expected values again
  //   expect(mockCallback.mock.calls.length).toBe(3);
  //   expect(mockCallback.mock.calls[1][0]).toBe(2);
  // });

  // it('return the args', () => {
  //   const myMock1 = jest.fn();
  //   const args1 = 'first arg';
  //   const args2 = 'second arg';
  //   myMock1(args1, args2);

  //   expect(myMock1.mock.calls[0][0]).toBe('first arg');
  //   expect(myMock1.mock.calls[0][1]).toBe('second arg');
  // });

  // it('return an id', async () => {
  //   result = await handler(1)
  //  const getData = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  // });

  it('should mock node-fetch', async () => {
    // throw new Error(JSON.stringify({ mockData }, null, 2));
    // fetch.mockResolvedValueOnce({
    //   ok: true,
    //   json: () => Promise.resolve(mockData),
    // });

    // fetch.mockImplementation(() =>
    // Promise.resolve({
    //   json: () => Promise.resolve(mockData)
    // })
    // );
    result = await handler(1);
    // const response = await fetch('https://example.com/api/data');
    // const data = await response.json();
    // const newData = data.mockData
    // console.log(JSON.stringify({ data }, null, 2));
    console.log(JSON.stringify({ result }, null, 2));
    // throw new Error(JSON.stringify({ newData }, null, 2));
    const newData = mockData.mockData
    expect(result).toEqual(newData);
  });
});
