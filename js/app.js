console.log("Hello");

let lastName='John';
let phoneNumber="234-456-4535"
let address=`12324 hello road S{lastName}`;
console.log(lastName+" "+phoneNumber);
let isStudent=true;
isStudent-false;
console.log(isStudent);

let car={
    maake: "Ford",
    Register_number: 2342312,
    isFast: true
}
console.log(car)

car.maake="Tesla";
console.log(car)
let nums=[1,2,3,4,5];

let res =false/2;
res ='3'+ 2;
console.log(nums[4])

let answer;
let n="50"
answer=Number(n)


console.log(answer)
let n2='20.01';
n2=parseInt(n2)
console.log(n2)

let power=Math.pow(2,4)
console.log(power)
power=Math.round(34.90)
console.log(power)
power=Math.round(Math.random() *9 +1)
console.log(power)
//conrtroll flow
let xy=5;
let yy=10;
// if(yy>xy){
//     console.log("JS is fun🤩")
// }


// const userinput=prompt("Enter a number")
// if(userinput % 2 ===0){
//     console.log("You have enter an even number")
// }else{
//     console.log("you enter an odd number")
// }
let ter=(false)? "Good" :"Bad"
console.log(ter)
for(let i =0;i<5;i++){
    console.log("I love coding 🧘‍♀️")

}

function showBook(user){
    console.log(user)
}
showBook("Hello")
showBook(45)
showBook([2,5,6])
console.log({name:"Jack",password:"jack123"})

function Greet(name){
    console.log("Welcome to Binary" + name)
}
Greet("Joan")


function add(a,b){
    return a+b;
}
let addRes=add(4,67)
console.log(addRes)
let div =(a,b)=>{
    return a/b

}
console.log(div)
const userAgeDisplay=age=>console.log("You are "+age+"Years old")
userAgeDisplay(34)

const delta =()=>console.log("arrow function")
delta()

const numb=[1,2,3,4,5];
const doubles=numb.map(n=>n*2)
console.log(doubles)
const ele=document.getElementsById("js")
ele.s