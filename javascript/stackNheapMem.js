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



// Stack memory is (primitive)

let someStack = "This is String"

let anotherStack = someStack

anotherStack = "This is anotherOne"

console.log(someStack);
console.log(anotherStack);




// heap is (non-primitive)

let StkObj = {
    user: "Ashish",
    id: 930
}

let stackObj = StkObj

stackObj.id = 5044

console.log(stackObj);
console.log(StkObj);