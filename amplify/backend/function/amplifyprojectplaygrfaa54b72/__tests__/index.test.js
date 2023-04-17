const { describe, it } = require('@jest/globals');
const { handler } = require('../src');
const data = require('./mock.data.json');
const fetch = require('node-fetch');

let result;

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve(data),
//   }),
// );

describe('this would return a value', () => {
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

  jest.mock('node-fetch');
  test('should mock node-fetch', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ data: 'test' }),
    });

    const response = await fetch('https://example.com/api/data');
    const data = await response.json();

    expect(data).toEqual({ data: 'test' });
  });
});
