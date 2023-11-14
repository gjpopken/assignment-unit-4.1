console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log(helloName('Gavin'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log('The sum of 2 and 2 is:', addNumbers(2, 2));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  return num1*num2*num3;
}
console.log('The product of 1 and 5 and 100 is', multiplyThree(1, 5, 100));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('Is 5 a positive number?', isPositive(5));
console.log('Is -18 a positive number?', isPositive(-18));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
return array[array.length-1];
}

const favoriteOwls = ['barn owl', 'great horned owl', 'snowy owl'];

console.log('My favorite owls are:', favoriteOwls);
console.log('The last of my favorite owls is:', getLast(favoriteOwls));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
for (let i of array) {
  if (i === value) {
    return true;
  }
}
return false;
}

console.log('Is snowy owl one of my favorite owls?', find('snowy owl', favoriteOwls));
console.log('Is burrowing owl one of my favorite owls?', find('burrowing owl', favoriteOwls));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string[0]) {
    return true;
  } else {
    return false;
  }
}
console.log('Is G the first letter in my name?', isFirstLetter('G', 'Gavin'));
console.log('Is F the first letter in my name?', isFirstLetter('F', 'Gavin'));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (let i of array) {
    sum += i;
  }
  // TODO: return the sum
  return sum;
}

const myNumbers = [-101, 1, 2, 8, 101, -81, 81];

console.log('My numbers are:', myNumbers);
console.log('The sum of these numbers is:', sumAll(myNumbers));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array) {
  const posArray = [];
  for (let i of array) {
    if (i > 0) {
      posArray.push(i);
    }
  }
  return posArray;
}
console.log('All the positive numbers from my numbers:', allPositive(myNumbers));



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// The problem: https://edabit.com/challenge/8Qg78sf5SNDEANKti
//Writing a function to count all the legs between a farmer's chickens, cows, and pigs.

function countLegs(chickens, cows, pigs) {
  const fourLegged = cows + pigs;
  const totalLegs = 4*fourLegged + 2*chickens;
  return totalLegs;
}

console.log('I have 3 chickens, 5 cows, and 0 pigs. Total legs:', countLegs(3, 5, 0));
console.log('I have 10 chickens, 40 cows, and 100 pigs. Total legs:', countLegs(10, 40, 100));


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
