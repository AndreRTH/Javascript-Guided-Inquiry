
/* VERY EASY: Create two variables and assign a number to each. Console log the difference between the numbers. Example output: “The difference between 6 and 2 is 4”
EASY: Create two variables and assign a person’s name to each. Console log a statement that says which name is shorter or longer, and by how many characters.                                                       Example output: “The name Thomas is longer than John by 2 characters”
MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.
HARD: Create 4 math functions, one called add() that adds 2 numbers, one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.
 
 
See next page...
VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"
 */ 


// Very Easy


let littleNum = 3; 
let bigNum = 10; 
let textStuff = 'the difference between 10 and 3 is';
console.log(`The difference between 10 and 3 is ${bigNum - littleNum}` )

// Easy 

let myName = 'Andres';
let otherName = 'Cam';
console.log(myName.length)
console.log(otherName.length)
console.log(`${myName}'s name is longer than ${otherName} by ${3} letters`)


// Medium 

let userInput = prompt("Write something, Friend!");

if (userInput === "" || userInput === null) {
  console.log("Got nothing to say?");
} else if (userInput === userInput.toUpperCase()) {
  console.log("Quit yelling at me!");
} else if (userInput === userInput.toLowerCase()) {
  console.log("Speak up!");
} else {
  console.log("You are talking normally.");
}

// Hard 

function add(x, y) {
    return x + y;
  }
  
  function subtract(x, y) {
    return x - y;
  }
  
  function multiply(x, y) {
    return x * y;
  }
  
  function divide(x, y) {
    return x / y;
  }

  console.log(add(5,5));

  // Very Hard
  
  //Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"

  let num1 = parseInt(prompt("Hello, User. Please enter a number:"));
  let operator = prompt("Please enter an operator (+, -, *, or /):");
  let num2 = parseInt(prompt("Please enter another number:"));
  
  let result;
  
  if (operator === "+") {
    result = add(num1, num2);
  } else if (operator === "-") {
    result = subtract(num1, num2);
  } else if (operator === "*") {
    result = multiply(num1, num2);
  } else if (operator === "/") {
    result = divide(num1, num2);
  }
  console.log(`${num1} ${operator} ${num2} = ${result}`);
  let finalPrompt = prompt(`Your answer is ${result}`);