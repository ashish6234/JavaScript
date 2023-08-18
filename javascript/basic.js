// // datatype


// var sstr1 = "This is string datatype in js"
// var num = 400 //this is number or integer datatype in js
// var boll = true // this is boolean datatype in js
// var numNll = null // this is null datatype in js
// var undfn = undefined // this undefined datatype in js
// var undfn; // this undefined datatype in js
// var symD = Symbol(405) // this symbol datatype in js

// //-  reference datatype


// //? Array in js
// var firstAr = [1,2,3,4,5,6,6]
// console.log(firstAr);
// console.log(firstAr[6]);

// //? objects in js
// var myObj = {
//     userName: "Ashish@02",
//     passWord: "somethingPass",
//     number: 9030030333,
//     isLogged: true
// }

// //? function in js 

// var myFunc = function(){
//     let usern = "Type here your name"
//     console.log(usern)
// }

// myFunc()
// myFunc()


//- string method in JS

let SomStr = "Something here debug here"
console.log(SomStr.length);
console.log(SomStr.lastIndexOf("here"));
console.log(SomStr.slice(0, 3));
console.log(SomStr.slice(2, 6));
let s =  SomStr.replace("debug", "Solve")
console.log(s)

//- Date in JS

let dat = new Date();
console.log(dat.getDate());
console.log(dat);
console.log(dat.getTime());
console.log(dat.getFullYear());
console.log(dat.getDay());
console.log(dat.getMinutes());
console.log(dat.getMilliseconds());
console.log(dat.getSeconds());
console.log(dat.getHours());
