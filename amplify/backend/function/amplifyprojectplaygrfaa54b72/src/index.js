exports.handler = async event => {
  const response = await fetch('https://fakestoreapi.com/products/1');
  const product = await response.json();

  return product;
};
