exports.handler = async event => {
  const response = await fetch(`https://fakestoreapi.com/products/${event}`);
  const product = await response.json();
  console.log(product);
  return product
};


