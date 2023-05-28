// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//     hexColors.push(color.hex)
//     rgbColors.push(color.rgb)
// }

// console.log(hexColors);
// console.log(rgbColors);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (product.name === productName)
//      return product.price;
//   }
//   return null;
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Змінна для збереження значень властивості
//   const propValues = [];

//   // Перебираємо кожен об'єкт в масиві products
//   for (const product of products) {
//     // Перевіряємо, чи в об'єкта є властивість з заданим ім'ям
//     if (product.hasOwnProperty(propName)) {
//       // Додаємо значення властивості до масиву propValues
//       propValues.push(product[propName]);
//     }
//   }

//   // Повертаємо масив значень властивості
//   return propValues;
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalPrice = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//       return totalPrice;
//     }
//   }
//   return 0;
// }

// // Change code above this line
// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// calculateTotalPrice("Grip");
// calculateTotalPrice("Scanner");

// const highYesterday = highTemperatures.yesterday;
// const highToday = highTemperatures.today;
// const highTomorrow = highTemperatures.tomorrow;
// const highIcon = highTemperatures.icon;

function makeTask(data) {
  const { text, category = "General", priority = "Normal" } = data;
  const completed = false;

  const task = {
    text,
    category,
    priority,
    completed,
  };

  return task;
}

console.log(makeTask({}));
console.log(
  makeTask({
    category: "Homemade",
    priority: "Low",
    text: "Take out the trash",
  })
);
console.log(makeTask({ category: "Finance", text: "Take interest" }));
console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
console.log(makeTask({ text: "Buy bread" }));
