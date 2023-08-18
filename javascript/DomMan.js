





//? Element by ID
let elem = document.getElementById("firstIdE").innerText = "Hi there This is Id Element here"
console.log(elem);
let elemCls = document.getElementsByClassName("firstClsE")
console.log(elemCls);
elemCls[0].computedStyleMap.background = "Green"




document.getElementById("click").click()
document.getElementById("click").style.color = "blue"

let one = document.getElementById("click");
console.log(one);

let cls = document.getElementsByClassName("clkk")
console.log(cls);
cls[0].style.background = "yellow"
cls[1].classList.add("bg-darkClr")
cls[0].classList.add("text_Font")
console.log(cls.innerHTML);
console.log(cls.innerText);
cls[1].classList.remove("bg-darkClr")


let headO = document.getElementsByClassName("hedin")
console.log(cls);
cls[0].style.background = "yellow"
headO[0].classList.add("bg-darkClr")
headO[0].classList.add("text_Font")

headO[0].innerHTML

let main = document.getElementsByClassName("mainCls")
console.log(main);
console.log(main.innerHTML);
console.log(main.innerText);
console.log(headO[0].innerText);
console.log(main[0].innerText);


let tagN = document.getElementsByTagName("p")
console.log(tagN);

let tagCreate = document.createElement('h4')
tagCreate.innerText = "Something will be Change"
tagN[0].appendChild(tagCreate)

let tagCreate2 = document.createElement('h1')
tagCreate2.innerText = "Something will or has to Change"
tagN[0].replaceChild(tagCreate2, tagCreate)


// removeChild


// selecting using query
// sel = document.querySelector('.firstCls')
// console.log(sel);
// sel = document.querySelectorAll('.firstCls')
// console.log(sel);

// EventListener

function clicked(){
    console.log('This is clicked');
}


window.onload = function(){
    console.log("Loaded Once");
}

clickId.addEventListener('click',function(){
    console.log("clicking");
})

clickId.addEventListener('mouseover',function(){
    console.log("clicking over");
})
clickId.addEventListener('mouseout',function(){
    console.log("clicking out");
})
clickId.addEventListener('mouseup',function(){
    console.log("clicking up");
})
clickId.addEventListener('mousedown',function(){
    console.log("clicking down");
})



