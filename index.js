// Creating Arrays
let emptyArray = [];
let numbers1 = [1, 2, 3, 4, 5]; // Renamed to numbers1
let fruits = ['apple', 'banana', 'cherry'];
let mixedArray = [1, 'apple', true, { name: 'John' }];

// Accessing Elements
console.log(fruits[0]); // Output: 'apple'
console.log(fruits[1]); // Output: 'banana'
console.log(fruits[2]); // Output: 'cherry'

// Modifying Elements
let numbers2 = [3, 1, 2, 5, 4]; // Renamed to numbers2
numbers2.sort();
console.log(numbers2); // Output: [1, 2, 3, 4, 5]

// Array Length
console.log(numbers2.length); // Output: 5

// Adding and Removing Elements
fruits.push('orange');
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'orange']

fruits.unshift('grape');
console.log(fruits); // Output: ['grape', 'apple', 'banana', 'cherry', 'orange']

let removedFruit = fruits.pop();
console.log(fruits); // Output: ['grape', 'apple', 'banana', 'cherry']

let firstFruit = fruits.shift();
console.log(fruits); // Output: ['apple', 'banana', 'cherry']

// Iterating Through Arrays
fruits.forEach(function(fruit) {
  console.log(fruit);
});

// Array Methods
let filteredNumbers = numbers2.filter(num => num > 2);
console.log(filteredNumbers); // Output: [3, 4, 5]

// Multi-dimensional Arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix[1][1]); // Output: 5

// Sparse Arrays
let sparseArray = [1, , , 4];
console.log(sparseArray.length); // Output: 4
