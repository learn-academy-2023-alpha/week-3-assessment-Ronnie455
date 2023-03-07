// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

//1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
 
// Pseudocode:
// Input - create a working test using a describe function using the provided variables
// Output - create a function that takes in a number and returns an array length containing the numbers of the Fibonacci sequence.
// Created a working test by using "fibArray" as my describe variable. I then created a function using the variables proveded. I initialized the array "result" by using first two numbers in the array. It then iterates through the remaining indexes by adding the sum of the previous two elements. The function then returns the result of the array.

// a) Create a test with expect statements for each of the variables provided.

// const fibLength1 = 6;
// const fibLength2 = 10;

// describe("fibArray", () => {
//   it("returns an array of length n containing the Fibonacci sequence", () => {
//     expect(fibArray(fibLength1)).toEqual([1, 1, 2, 3, 5, 8]);
//     expect(fibArray(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
//   });
// });
  
// //TypeError: fibLength1 is not a function

// // Expected output: [1, 1, 2, 3, 5, 8]

   

// // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// // b) Create the function that makes the test pass.
// const fibArray = (num) => {
//   const result = [1, 1];

//   for (let i = 2; i < num; i++) {
//     result.push(result[i - 2] + result[i - 1]);
//   }

//   return result;
// };
// console.log(fibArray([fibLength1]))
// console.log(fibArray([fibLength2]));


// [ 1, 1, 2, 3, 5, 8 ]

// at Object.log (code-challenges.test.js:45:9)

// console.log
// [
// 1,  1,  2,  3,  5,
// 8, 13, 21, 34, 55
// ]

// at Object.log (code-challenges.test.js:46:9)

// PASS  ./code-challenges.test.js
// fibArray
// ✓ returns an array of length n containing the Fibonacci sequence (3 ms)



// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// Pseudocode: 
// input - create a working test with provided variable values. After working test is working create a function
//output - create a function that takes in an object and returns an array of the values sorted from least to greatest
// created a test with the variable "sortObject"
//  created function using sortObject variable
// in the function sortObject, I will make the parameter obj
// use object.values to iterate through the loop finding the indexes of the numbers in the arrays
// I will need to return the sorted arrays from least to greatest using object.values and then sort the indexes using .sort them in order from least to greatest by using the ((a, b) => a - b) method

// a) Create a test with expect statements for each of the variables provided.

// describe("sortObject", () => {
//   it("sorts the array of the values from least to greatest", () => {
// const studyMinutesWeek1 = {
//   sunday: 90,
//   monday: 30,
//   tuesday: 20,
//   wednesday: 15,
//   thursday: 30,
//   friday: 15,
//   saturday: 60
 
// }

// // // Expected output: [15, 15, 20, 30, 30, 60, 90]

// const studyMinutesWeek2 = {
//   sunday: 100,
//   monday: 10,
//   tuesday: 45,
//   wednesday: 60,
//   thursday: 20,
//   friday: 15,
//   saturday: 65
// }
// // Expected output: [10, 15, 20, 45, 60, 65, 100]


//   expect(sortObject(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90]),
//   expect(sortObject(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
//   console.log(sortObject(studyMinutesWeek1));
// console.log(sortObject(studyMinutesWeek2));
// })
//   })


// // b) Create the function that makes the test pass.

// const sortObject = (obj) => {
//   return Object.values(obj).sort((a, b) => a - b);
//}

//  [
//   15, 15, 20, 30,
//   30, 60, 90
// ]

//   at Object.log (code-challenges.test.js:101:11)

// console.log
// [
//   10, 15,  20, 45,
//   60, 65, 100
// ]

//   at Object.log (code-challenges.test.js:102:9)

// PASS  ./code-challenges.test.js
// sortObject
// ✓ sorts the array of the values from least to greatest (19 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// Pseudocode:
// input - create a test using a desribe function. Once the test works create a function
// output - create a function that takes in an array and returns array of the accumulating sum. An empty array should return an empty array.

// Create a test with the variable "accumlatingSum" and use the provided variables as the expect arguments
// create a function using my variable accumalatingSum
// Set a parameter in the function called arr
// declare variable called result using let. result will return the results of the function into an array.
// declare sum variable using let = 0
// create a for loop that iterates thhrough  the array starting at index 0
// create addition assignment for sum and array index
// result.push(sum) 
// return result which will return the accumalated sums in an array
// console.log to see results in terminal


// a) Create a test with expect statements for each of the variables provided.

// const accountTransactions1 = [100, -17, -23, -9]
// // Expected output: [100, 83, 60, 51]

// const accountTransactions2 = [250, -89, 100, -96]
// // Expected output: [250, 161, 261, 165]

// const accountTransactions3 = []
// // Expected output: []
// describe("accumulatingSum", () => {
//   it("returns an array of the accumulating sum. an empty array should return an empty array", () => {
//     expect(accumulatingSum(accountTransactions1)).toEqual([100, 83, 60, 51]),
//     expect(accumulatingSum(accountTransactions2)).toEqual([250, 161, 261, 165]),
//     expect(accumulatingSum(accountTransactions3)).toEqual([])
//   })
// })
// // b) Create the function that makes the test pass.
// const accumulatingSum = (arr) => {
//   let result = [];
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     result.push(sum);
//   }
//   return result;
// };
// console.log(accumulatingSum(accountTransactions1));
// console.log(accumulatingSum(accountTransactions2));
// console.log(accumulatingSum(accountTransactions3));

// [ 100, 83, 60, 51 ]

//       at Object.log (code-challenges.test.js:166:9)

//   console.log
//     [ 250, 161, 261, 165 ]

//       at Object.log (code-challenges.test.js:167:9)

//   console.log
//     []

//       at Object.log (code-challenges.test.js:168:9)

//  PASS  ./code-challenges.test.js
//   accumulatingSum
//     ✓ returns an array of the accumulating sum. an empty array should return an empty array (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total