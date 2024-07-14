//- Interview Question



// Array.prototype.extraPrototype = "Ashish"

// const myNewArray = [1, 2, 44, 5]

// for(let arr in myNewArray){
//     console.log(arr);
// }



//= Array in JS

const myArr = [3, 4, 5, 6, 7, 7, 8, 95]

const myEmo = ["😊", "😁", "😂"]

const HeroEmo = new Array("🦴", "😂", "😒😒😒", "❤️", "💕", "🎶😎");

// console.log(myArr[1]);
// console.log(myEmo);
// console.log(HeroEmo);

//! Arrays methods in JS

//? Push method in array
// myEmo.push("❤️")
// myEmo.push("💕")

//? remove the last element
// myEmo.pop() 

//? Unshift Array in js always put in start of the array
// myEmo.unshift("👍")
// console.log(myEmo);

//? shift method in Array  remove from start

// myEmo.shift()

// console.log(myEmo);

//? includes method in array

// console.log(myEmo.includes("❤️"));

//? Indexoff method in array

// console.log(myEmo.indexOf("❤️"));

//? join method in array 

// const myJoin = myEmo.join()

// console.log(myEmo);
// console.log(typeof myEmo);
// console.log(myJoin);
// console.log(typeof myJoin);


//? Slice and Splice method in js 

// array 

// console.log("1", HeroEmo);

// const sli = HeroEmo.slice(1, 3)
// console.log(sli);
// console.log("2", HeroEmo);

// const spl = HeroEmo.splice(1,3)
// console.log(spl);
// console.log("3", HeroEmo);

//? array Advance

// const someArrM = ["iRonMan", "Hulk", "BlackPanther"]
// const someArrD = ["Batman", "Flash", "someHero"]

// someArrM.push(someArrD)
// const someOne = someArrM.concat(someArrD)
// const someTwo = [...someArrM, ...someArrD]



// console.log(someTwo)


//? flat in array 

const OneFlatarr = [12,2,34,42,[4,3,2,1],90, [3,2,100]]

const OneFlatOne = OneFlatarr.flat(Infinity)
// console.log(OneFlatOne)


//? Data is array in array

// console.log(Array.isArray("Something"))
// console.log(Array.from("Something"))
// console.log(Array.from({OneName: "Ashish"}))


let TakeOne = 101
let TakeTwo = 102
let TakeThree = 103
let TakeFour = 104

// console.log(Array.of(TakeOne,TakeTwo,TakeThree,TakeFour))