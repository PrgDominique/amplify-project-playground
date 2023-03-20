exports.handler = async event => {
  const Products = async () => {
    const response = await fetch('https://fakestoreapi.com/products/1');
    const json = await response.json();
    return json;
  }
 return Products
};

