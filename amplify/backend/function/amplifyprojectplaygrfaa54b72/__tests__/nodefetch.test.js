const { describe, it } = require('@jest/globals');
const { handler } = require('../src');
const mockData = require('./mock.data');
const fetch = require('node-fetch');

jest.mock('node-fetch');

describe('return a response', () => {
  it('should return a response and manipulate the data thru mocking the library of node-fetch', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    const result = await handler(1);
    const response = await fetch('https://example.com/api/data');
    const data = await response.json();
    const newData = data.mockData;
    expect(result).toEqual(newData);
  });
});
