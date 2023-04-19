const { describe, it } = require('@jest/globals');
const { handler } = require('../src');
const mockData = require('./mock.data');

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockData),
  }),
);

describe('this would return a response', () => {
  it('it should match the response by handler and the hardcoded mock data', async () => {
    const result = await handler(1)
    // throw new Error(JSON.stringify({result},null,2))
    const newData = mockData.mockData
    expect(result).toEqual(newData)
  });
});
