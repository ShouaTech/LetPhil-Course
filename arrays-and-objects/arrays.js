// const fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// Declaring and Manipulating Arrays
// console.log(fruits[0]);
// console.log(fruits[2]);

// console.log(fruits[1]);

// fruits[1] = "Blueberry";

// console.log(fruits);

// console.log(fruits.length); // Output: 3

// Array methods
// push
// const mango = fruits.push("Mango"); // puts Mango at the end of array

// console.log(fruits);

// // pop
// fruits.pop(); // deletes last variable in array

// console.log(fruits);

// // shift
// fruits.shift(); // deletes first variable in array

// console.log(fruits);

// // unshift
// fruits.unshift("Grape"); // adds to the start of array

// console.log(fruits);

// // splice - add / remove elements
// fruits.splice(1, 1, "Peach");

// console.log(fruits);

// fruits.splice(1, 2);

// console.log(fruits);

// map
const numbers = [1, 2, 3, 4, 5];
console.log("numbers =", numbers);
const doubled = numbers.map((num) => num * 2);
console.log("doubled =", doubled);
console.log("numbers =", numbers);