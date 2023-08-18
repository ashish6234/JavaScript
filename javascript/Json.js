//? String Conversion


myObj = {
    Name: "Ashish",
    LName: "Ramchandra",
    Age: 20,
    Number: 7985038855
}

// str = JSON.stringify(myObj);
// console.log(typeof myObj);

// console.log(typeof str);

parsed = JSON.parse(`{
     Name: "Ashish",
     LName: "Ramchandra",
     Age: 20,
     Number: 7985038855
 }`);
console.log(parsed);