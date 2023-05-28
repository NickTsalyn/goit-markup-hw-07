function getProductPrice(productName) {
  // Change code below this line
  for (const product of products) {
    if (product.name === productName) return product.price;
  }
  return null;
}
console.log(getProductPrice("Radar"));
console.log(getProductPrice("Grip"));
console.log(getProductPrice("Scanner"));
console.log(getProductPrice("Droid"));
console.log(getProductPrice("Engine"));
