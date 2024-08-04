//-ACTIVITY 1
//? TASK 1  for loop 1 to 10

for (let i = 1; i<=10; i++){
    console.log(i);
}

//? TASK 2  for loop for multiplication of 5
for (let i = 1; i<=10; i++){
    console.log("5 x 1 =",5 * i);
}

//? Use a for loop to print the multiplication table of 5
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// =Done

//-ACTIVITY 2
//? TASK 3  while loop to calculate the sum of num 1 to 10

let sum = 0;
let num = 1;

while (num <= 10) {
    sum += num
    num++;
}
console.log("The sum of numbers from 1 to 10 is:", sum);


//? TASK 4  while loop to print from 10 to 1 in while loop

let oposite = 10;

while (oposite >= 1) {
    console.log(oposite);
    oposite--;
}

//-ACTIVITY 3
//? TASK 5  do while loop to print 1 to 5
let i = 1;

do {
    console.log(i); 
    i++;            
} while (i <= 5);

//? TASK 5  do while loop to print 1 to 5
let number = 5; 
let factorial = 1; 
let numF = number; 

do {
    factorial *= numF; 
    numF--;         
} while (numF > 0);

console.log(`The factorial of ${number} is: ${factorial}`);


//-ACTIVITY 4

//? Task 7 Use nested loops to print the pattern of stars
for (let i = 1; i <= 5; i++) {
    let stars = ''; 
    for (let j = 1; j <= i; j++) {
        stars += '*'; 
    }
    console.log(stars); 
}

//-ACTIVITY 5

//? Task 8 Use a for loop to print numbers from 1 to 10 but skip 5
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; 
    }
    console.log(i);
}

//? Task 9 Use a for loop to print numbers from 1 to 10 but break at 7
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break; 
    }
    console.log(i);
}