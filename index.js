//String Manipulation Functions:
//Reverse a String: Write a function that reverses a given string.

// function reverseString(str) {
//     return str.split('').reverse('').join('')
// }

// console.log(reverseString('hello'));
// console.log(reverseString('GoMyCode'));

//Count Characters: Create a function that counts the number of characters in a string

// function countCharacter(str) {
//     return str.length
// }

// console.log(countCharacter('Onyinyechichukwu'));
// console.log(countCharacter('Parasite'));

//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence

// function capitalizeWords(sentence) {
//     return sentence.split(' ').map(word => {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(' ');
//   }
  
//   // Examples
//   console.log(capitalizeWords("hello world"));
//   console.log(capitalizeWords("javaScript is fun"));
//   console.log(capitalizeWords("capitalize each word"));


//Array Functions:

//Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of number.

// function findMaximum(arr) {
//     return Math.max(...arr)
// }

// function findMinmum(arr) {
//     return Math.min(...arr)
// }

// const numbers = [3, 6, 2, 1, 8, 2, 4, 0];

// console.log(findMaximum(numbers));
// console.log(findMinmum(numbers));


//Sum of Array: Create a function that calculates the sum of all elements in an array.

// var add = function (a, b) {
//     return a + b
// }

// console.log(add(5, 3));
// console.log(add(-3, 1));
// console.log(add(2, 9));
// console.log(add(2, 0));


//Filter Array: Implement a function that filters out elements from an array based on a given condition.

// function filterArray(arr, condition) {
//     return arr.filter(condition);
//   }
  
//   function isGreaterThanNine(num) {
//     return num > 9 == true;
//   }

//   function isEven(num) {
//     return num % 2 === 0;
//   }
  
//   console.log(filterArray([89, 12, 0], isGreaterThanNine));
//   console.log(filterArray([1, 2, 3, 4, 5], isEven));




//Mathematical Functions:

//Factorial: Write a function to calculate the factorial of a given number.

// function factorial(num) {
//     if (num < 0) {
//         return -1
//     }
//     let result = 1
//     for (let i = 1; i <= num; i++) {
//         result *= i
//     }
//     return result
// }

// console.log(factorial(6));
  

//Prime Number Check: Create a function to check if a number is prime or not.

// function isPrime(num) {
//     if (num <= 1) {
//       return false;
//     }
//     if (num === 2) {
//       return true;
//     }
//     if (num % 2 === 0) {
//       return false;
//     }
//     for (let i = 3; i <= Math.sqrt(num); i += 2) {
//       if (num % i === 0) {
//         return false; 
//       }
//     }
//     return true; 
//   }
  
//   // Examples
//   console.log(isPrime(2));
//   console.log(isPrime(4));
//   console.log(isPrime(17));
//   console.log(isPrime(18));
//   console.log(isPrime(1));
  

// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )

function generateFibonacci(n) {
    if (n <= 0) {
      return [];
    }
    
    const fibonacci = [0];
    
    if (n > 1) {
      fibonacci.push(1);
    }
    
    for (let i = 2; i < n; i++) {
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    
    return fibonacci;
  }
  
  // Examples
  console.log(generateFibonacci(5));
  console.log(generateFibonacci(10));
  console.log(generateFibonacci(1));
  console.log(generateFibonacci(0));
  