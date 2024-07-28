//-ACTIVITY 1
//? TASK 1  iF  statement check if num is + - or 0

let num = -102

if (num > 0) {
    console.log(num + " is a positive number");
}
else if (num < 0) {
    console.log(num + " is a negative number");
}
else {
    console.log(num + " is zero");
}

//? TASK 2  iF  statement check if person can vote

let age = 10

if (age > 18) {
    console.log(`Your age is ${age} and you can vote`);
} else {
    console.log(`Your age is ${age} and you can't vote eligiblity is 18+`);
}



//-ACTIVITY 2
//? TASK 3  Nested if else statement check the day of the week


let num1 = 120
let num2 = 122
let num3 = 123

if (num1 >= num2) {
    if (num1 >= num3) {
        console.log("The largest number is: " + num1);
    } else {
        console.log("The largest number is: " + num3);
    }
} else {
    if (num2 >= num3) {
        console.log("The largest number is: " + num2);
    } else {
        console.log("The largest number is: " + num3);
    }
}

//-ACTIVITY 2
//? TASK 4  Switch statement check the day of the week

day = 5

switch (day) {
    case 1:
        console.log("Today is monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is wednesday");
        break;
    case 4:
        console.log("Today is thurday");
        break;
    case 5:
        console.log("Today is friday");
        break;
    case 6:
        console.log("Today is saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;


        default:
            console.log("input error provide proper day");
        break;
}


//? TASK 5  Switch statement assign grade based on 1-5 and a - e
let grade = 39;

switch (true) {
    case (grade >= 70):
        console.log("You have scored Grade- A");
        break;
        case (grade >= 60):
            console.log("You have scored Grade- B");
            break;
            case (grade >= 50):
                console.log("You have scored Grade- C");
                break;
    case (grade >= 40):
        console.log("You have scored Grade- D");
        break;
        case (grade >= 30):
            console.log("You have scored Grade- E");
        break;
    default:
        console.log("You have failed this exam");
        break;
    }
    
    //-ACTIVITY 3
    //? TASK 6  program to check using ternary operator  if a number is even or odd
    let operatNum = 3;
    let result = operatNum % 2 == 0 ? "even" : "odd"
    console.log(result);


    //-ACTIVITY 2
    //? TASK 7 program to check leap year using combination conditions
let year = 2000;

if (year % 400 == 0) {
    console.log(year + " is a leap year");
} else if (year % 100 == 0) {
    console.log(year + " is not a leap year");
} else if (year % 4 == 0) {
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}
