// const MyObj = {
//     Name: "Ashish",
//     age: 230,
//     UserEmail: "Ashish@Gmail.com",
//     isUSerLogged: false

// }




// const o = MyObj;
// o.age = 30;
// o.UserEmail = "Something@gmail.com"
// o.Name = "Something"
// o.isUSerLogged = true


// console.log(MyObj);


// console.log(MyObj)
// console.log(MyObj["Name"])
// console.log(MyObj)



// const kuchbhi = new Object();
// kuchbhi.Fname = "Sandeep";
// kuchbhi.Lname = "Sir";
// kuchbhi.SAge = 30;
// kuchbhi.Visited = true;


// document.getElementById("sirrr").innerHTML = kuchbhi.Fname+ " = is visited college =" + kuchbhi.Visited + " Sir ki age kya =" + kuchbhi.SAge;


//- Objects in Js

//? Singleton 

// Object.create

//? object literals

const mySymbol = Symbol("This Will be symbol")


const userOne = {
    name: "SomeOne",
    "name Check": "CheckSomeOne",
    [mySymbol]: "This is the real symbol",
    local: "dehradun",
    lastarr: ["SomeOneO","SomeTwo",50,"Something" ],
    email: true,
    num: 40
}

console.log(userOne[mySymbol])
console.log(typeof userOne[mySymbol])

// console.log(userOne.email)
console.log(userOne["email"])
// console.log(userOne.name Check)
console.log(userOne["name Check"])
