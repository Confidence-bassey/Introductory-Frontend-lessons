//alert("Hello JavaScript")
console.log("Learning javascript is fun")

var nickName = "Dencial b"
function names(){
    var lastName = "Bassey"
   // console.log(lastName)
}
console.log(nickName)

let name = "Confidence"
let age = 21;

if(age>20){
    let bca = "Hi Dencial"
    console.log(bca)
}

function addNum(a,b){
    return a+b;
}
console.log(addNum(8,9))

const isperson = true

const person = {
    firstname : "Confidence",
    lastname: "Bassey",
    OtherNames : "Abel",
    age : 21,
    email : "confidencialb11@gmail.com",
    hobbies : ["sleeping","singing","dancing","coding","reading","cooking","eating"]
}

console.log(typeof person)
console.log(typeof isperson)
console.log(typeof age)

let name1 = "Vivian"
let age1 = "20"

console.log(`My name is ${name1} and I am ${age1}`)

let note = "Hello everyone"
let val
val = note.length

console.log(val)
console.log(note[2])

val = note.substring(3,10)
console.log(val)

val = note.split('')
console.log(val)

let colours = ["red","white","blue","pink","brown","black","pale red"]

//Loops in javascript
for(let i = 0; i<=10; i++){
    console.log(`For loop numbers: ${i}`)
}

const numbers = [20,98,92,101]

for(let a = 0; a < numbers.length; a++){
    console.log(numbers[a])
   /* for(let b = 1; b<=a; b++){
        console.log("*")
    } */  
}

for(let c of numbers){
    console.log(c)
}

//for in returns the index of array elements in javascript
for(let b in numbers){
    console.log(b)
}

const y = 20;
if(y == 15){
    console.log("y is 15")
}else if(y > 18){
    console.log("y is greater than 18")
}else{
    console.log("y is not 15 and is not ")
}

var grade
const score = [20,39,40,89,56,66,73,49,43,45,59,69,98,50]
for(let x of score){
    if(x>=40 && x<=45){
        console.log("E")
    }else if(x>=45 && x<=49){
        console.log("D")
    }else if(x>=50 && x<=59){
        console.log("C")
    }else if(x>=60 && x<69){
        console.log("B")
    }else if(x>=70 && x<=100){
        console.log("A")
    }else{
        console.log("F")
    }            
}

//switch statement in javascript

let num = 18;
switch(num){
    case 17:
        console.log("Under 18")
        break;
    case 25: 
        console.log("Older than the range")
        break;
    default:
        console.log("You have to be 18 to 24 years to be able to contest")
        break;       
}


//tenary operator in javascript
const yrsold = 22;
const personAge = yrsold >= 18 ? "You can go ahead and contest, good luck!!":"Sorry, you're not up to age and can't contest at this time"
console.log(personAge)

//functions overview
function product(a,b){
    return a*b;
}
console.log(product(250,98))

//Arrow function in javascript
const muladd = (i,j) =>{
    console.log(i*j+j)
}

muladd(5,5)

//let a = 4
function numCubes(a){
    return Math.pow(a,3);
}

console.log(numCubes(4));

function minSec(minutes){
    return minutes*60;
}

console.log("Function to convert minutes to seconds")
console.log(minSec(7))



function ageInDays(years){
    return age*365;
}

console.log("Function to convert age to days")
console.log(ageInDays(22))




