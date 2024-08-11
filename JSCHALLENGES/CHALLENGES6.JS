//- ACTIVITY 1
//? TASK 1 - ARRAY OF 1 TO 5 

let numbers = [1, 2, 3, 4, 5];

console.log(numbers);


//? TASK 2 - ACCESS FIRST AND LAST ELEMENT

let firstEl = ["first", 2, "third", "fourth", 5]

console.log("First element= ", firstEl[0]);
console.log("last element= ", firstEl[firstEl.length -1]);



//- ACTIVITY 2
//? TASK 3 - PUSH METHOD ADDING ELEMENT AT THE END OF THE ARRAY
let fruits = ["apple", "banana", "cherry"];
console.log(fruits);
fruits.push("grapes");
console.log(fruits);

//? TASK 4 - ARRAY POP LAST ELEMENT

let fruits2 = ["apple", "banana", "cherry","oranges"];
fruits2.pop()
console.log(fruits2);


//? TASK 5 - ARRAY SHIFT METHOD TO REMOVE FIRST ELEMENT
let fruits3 = ["apple", "banana", "cherry","oranges"];
console.log(fruits3);
fruits3.shift()
console.log(fruits3);

//? TASK 6 - ARRAY UNSHIFT METHOD TO ADD  ELEMENT AT THE BEGINNING OF THE ARRAY
let sumNumb = [2, 4, 6, 3, 9]
console.log(sumNumb);

sumNumb.unshift(0)
sumNumb.unshift(0)
sumNumb.unshift(1)
console.log(sumNumb);


//- ACTIVITY 3

//? TASK 7 - ARRAY MAP METHOD TO DOUBLED
let mapArr = [1, 2, 3, 4, 5];
console.log(mapArr);

const doubledMap = mapArr.map(number => number *2)
console.log(doubledMap);

//? TASK 8 - ARRAY FILTER METHOD TO REMOVE EVEN NUMBERS

let filterArr = [1, 2, 3, 4, 5, 44, 55, 33, 88];
console.log(filterArr);

const filtring = filterArr.filter(number => number % 2 === 0)

console.log(filtring);

//? TASK 9 - ARRAY REDUCE METHOD TO CALCULATE SUM OF NUMBERS

let sumnuM = [302, 495, 43, 24 ,66];
console.log(sumnuM);

const reduceSum = sumnuM.reduce((accumulator, currentValue)=> accumulator + currentValue, 0)
console.log(reduceSum);


//- ACTIVITY 4
//? TASK 10 - ARRAY ITERATOR METHOD USE FOR LOOP VALUE OF EACH ELEMENT
let iteratorArr = [22, 43, 50, 65];
console.log(iteratorArr);

for (let i = 0; i < iteratorArr.length; i++) {
   console.log(iteratorArr[i]);
   
    
}


//? TASK 11 - ARRAY FOREACH ARRAY

const myArry = [1, 2, 3, 4, 5];

myArry.forEach(function (element) {
   console.log(element);
   
})


//- ACTIVITY 5
//? TASK 12 - ARRAY TWO DIMENSIONAL

const matrix = [
   [1,2,4],
   [5,6,7],
   [32,34,55]
]

console.log(matrix);


//? TASK 13 - ACCESSING ARRAY OF TWO DIMENSION

const matrix1 = [
   [334, 555, 332],
   [304, 244, 552],
   [55, 66, 77]
];

console.log(matrix1[0][1]);
console.log(matrix1[1][2]);