exports.handler = async event => {
  const fetch = require('node-fetch');
  // console.log('fetch: '+ JSON.stringify({ fetch }, null, 2));
  const response = await fetch(`https://fakestoreapi.com/products/${event}`);
  // console.log('fetch1: '+ JSON.stringify({ fetch }, null, 2));
  const product = await response.json();
  // throw new Error(JSON.stringify({ product }, null, 2));
  console.log(product);
  return product;
};
