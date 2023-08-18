//- stack is used in primitive

let userOne = "SomeOne"
let anotherUser = userOne;

anotherUser = "SomeOneTwo"

// console.log(userOne);
// console.log(anotherUser);





//- heap memory is used in reference Datatype

let userObj = {
    Name: "SomeoneObj",
    Number: 9040400443
}

let userObjTwo = userObj;
userObj.Name = "Ashish"

console.log(userObj.Name);
console.log(userObjTwo.Name);