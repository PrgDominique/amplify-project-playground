exports.handler = event => {
  const product = event
    fetch('https://fakestoreapi.com/products/1')
    .then(response => response.json(event));

    return product
};
