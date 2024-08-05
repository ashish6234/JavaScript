//- Activity 1
//? Task 1 Write a program to find odd in even using function

function checkOddEven(number) {
    if (number % 2 === 0) {
        return `${number} is even`;
    } else {
        return `${number} is odd`;
    }
}

console.log(checkOddEven(1));
console.log(checkOddEven(2));
console.log(checkOddEven(3));
console.log(checkOddEven(4));
console.log(checkOddEven(5));
console.log(checkOddEven(6));

function CheckOdd(typeNum) {
    if (typeNum % 3 === 0) {
        return `${typeNum} is a multiple of 3`;
    } else {
        return `${typeNum} is a not multiple of 3`;
    }
}

console.log(CheckOdd(4));
console.log(CheckOdd(3));
console.log(CheckOdd(30));

//? Task 2 Write a program to calculate square of number using function

function squareR(sqNum) {
    return sqNum * sqNum
}
console.log(squareR(34));
console.log(squareR(40));
console.log(squareR(4));
console.log(squareR(44));


//- Activity 2
//? Task 3 Write a program to find max num
function findMaxOfTwo(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(findMaxOfTwo(5, 10));
console.log(findMaxOfTwo(20, 15));
console.log(findMaxOfTwo(-1, -5));



//? Task 4 Write a program add two string

const concatE = function (stR1, str2) {
    return stR1 + str2;
}

console.log(concatE("Ashish", " Ramchandra"));
console.log(concatE("Hello", " World"));

//-Activity 3
//? Task 5 Write arrow  function to add two number

const arrFun = (numbA, numbB) => numbA + numbB;

console.log(arrFun(40, 43));
console.log(arrFun(4, 33));

//? Task 6 Write arrow  function to find char from string


const arrStrC = (strOn, charrOn) => strOn.includes(charrOn)

console.log(arrStrC("Hello There How u Doing", "D"));
console.log(arrStrC("SomeThing", "T"));
console.log(arrStrC("SomeOne", "O"));
console.log(arrStrC("AAAA", "p"));


//? Task 7 Function to return the product of two numbers, with a default value for the second parameter
const multiply = (num1, num2 = 1) => num1 * num2;

console.log(multiply(5, 10));
console.log(multiply(20, 15));
console.log(multiply(7, 3));

//? Task 8 Function to take person name and age reurn greeting
function greet(name, age = 25) {
    console.log(`Hello ${name}, you are ${age} years old!`);
}

greet("Alice");
greet("Bob", 30);


//? Task 9 higher-order Function to take two num
function repeatFunction(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
}

function sayHello() {
    console.log("Hello!");
}

repeatFunction(sayHello, 5);


//? Task 10 Higher-order Function parameter to take two value and applies to second
function composeFunctions(func1, func2, value) {
    const result1 = func1(value);
    const result2 = func2(result1);
    return result2;
}

function addFive(x) {
    return x + 5;
}

function multiplyByTwo(x) {
    return x * 2;
}

const result = composeFunctions(addFive, multiplyByTwo, 10);
console.log(result);