const { describe, it } = require('@jest/globals');
const { handler } = require('../src');
const mockData = require('./mock.data.json');
const fetch = require('node-fetch');
const { sampleTest } = require('./test.data');

let result;
jest.mock('node-fetch');
// jest.mock('../src/index.js', () => {
//   return jest.fn().mockImplementation(() => {
//     return { playSoundFile: 'fakePlaySoundFile' };
//   });
// });

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve(data),
//   }),
// );

describe('this would return a value', () => {
  it('return once ', () => {
    const mockCallback = jest.fn();

    sampleTest(mockCallback);
    console.log(mockCallback.mock.calls[0][0]);
    expect(mockCallback.mock.calls.length).toBe(1);
    expect(mockCallback.mock.calls[0][0]).toBe(1);

    // Mock the callback function again with a different value
    mockCallback.mockImplementationOnce(count => {
      console.log(` The counter is now ${count}`);
      expect(count).toBe(2);
    });

    sampleTest(mockCallback);
    mockCallback.mockImplementationOnce(count => {
      console.log(` The counter is now ${count}`);
    });

    // Call the incrementCounter function with the new mock callback
    sampleTest(mockCallback);
    sampleTest(count => {
      console.log(`The counter is now ${count}`);
    });

    console.log(mockCallback.mock.calls);
    // Assert that the callback was called with the expected values again
    expect(mockCallback.mock.calls.length).toBe(3);
    expect(mockCallback.mock.calls[1][0]).toBe(2);
  });
  // it('return the args', () => {
  //   const myMock1 = jest.fn();
  //   const args1 = 'first arg';
  //   const args2 = 'second arg';
  //   myMock1(args1, args2);
  //   // console.log(myMock1.mock.instances);
  //   // const a = new myMock1();
  //   // a.test = 'test';
  //   // console.log(myMock1.mock.instances);
  //   expect(myMock1.mock.calls[0][0]).toBe('first arg');
  //   expect(myMock1.mock.calls[0][1]).toBe('second arg');
  // });

  // it('return an id', async () => {
  //   result = await handler();
  //   console.log('result: ' + JSON.stringify({ result }, null, 2));
  // });
  // it('return an id', async () => {
  //  await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     .catch(error => console.error(error));
  // });

  // it('should mock node-fetch', async () => {
  //   fetch.mockResolvedValueOnce({
  //     ok: true,
  //     json: () => Promise.resolve(mockData),
  //   });

  //   // fetch.mockImplementation(() =>
  //   // Promise.resolve({
  //   //   json: () => Promise.resolve(mockData)
  //   // })
  //   // );
  //   // const response = await fetch('https://example.com/api/data');
  //   // const data = await response.json();
  //   result = await handler(1);
  //   // throw new Error('stop')
  //   // console.log('result: ' + JSON.stringify({ result }, null, 2));
  //   // throw new Error(JSON.stringify({data},null,2))
  //   // console.log(data);
  //   console.log('fetch: ' + fetch);
  //   // expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products/1');
  //   expect(result).toBe(mockData);
  // });
});
