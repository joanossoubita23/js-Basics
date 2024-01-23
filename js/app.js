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




let ford={}
console.log(ford);
const spaceship={
    color:'silver',
    Fuel_type:'diesel',
    Acitve_duty: true,
    numCrew:5,
    invade: function(){
        console.log("Hello i am her to invade your planet")

    },
    crew: {
        captain: {
            name:'chris',
            degree: 'Attacker',
            encourageTeam(){
                console.log("We got this!");
            }
        }
    }
}
spaceship.crew.captain.encourageTeam()
spaceship.color='Gold';
spaceship.data=299;
spaceship.homePlanet='Earth';

console.log(spaceship.color)
console.log(spaceship.Fuel_type)
console.table(spaceship)
spaceship.invade()

const goat={
    dietType:'herbivore',
    makeSound(){
        console.log("baaa");
    },
diet: ()=>{
    console.log(this.dietType);
}
}

const personObj={
    _firstName:'John', //private object
    _lastName:'Doe'
}

goat.makeSound()
goat.diet()
console.log(personObj._firstName);

const vampire={
    nam1:'Dracula',
    residence:'Transylvania',
    preferences:{
        day:'stay inside',
        night:'hunting fo blodd'
    }
};
const nameOfVam=vampire.name;
const rep=vampire.preferences;
// desctructuring help to remove the call of each method we can just call it

const {nam1,residence,preferences}=vampire;
console.log(residence)

//Arrays

const colorArray=['yellow','red','green','blue']
let misc=[1,true,'js',2,3,{n:'joan'}]
//size of array
console.log(colorArray.length)
console.log(misc.length)

//.. spread operations
let nums2=[1,2,3,4,5]
console.log(nums2);
let num3=[-1,0,...nums2,6,7]
console.log(num3);
// 
const a =new Array();
a[0]=2;
console.log(a);

//Array.of
let myArr= Array.of(12,23,4,5);
let original=[1,2,3,4,5]
let copy=Array.from(original)
console.log(copy)
copy.push(7)
//Array build in methods
const food =['🍌','🍉','🍏','🍇','🥝']
//add element to the end of array
food.push('🍔')
//remove element in start of array
food.pop()
//add element in start of array
food.unshift('🍌')
//remove element from the sart of array
food.shift()
console.log(food)
console.log(food)
let myArray=[1,2,3,4,5]
console.log(myArray);
//myArray. spice
myArray.splice(1,0,6,7)
console.log(myArray)
//
for( let i =0;i<myArray.length;i++){
    console.log(myArray[i]*2)
}
console.log("-----")

myArray.forEach(el=>console.log(el))

console.log("-------")
myArray.map(el=>console.log(el))


const even=myArray.filter(e=>{ return e % 2===0})
console.log(even)

// DOM Document Object Model
const el2= document.getElementById("main")
console.log(el2)
 const byclass=document.getElementsByClassName("title")
 console.log(byclass)
 el2.innerText="Java is fun";
 el2.innerText="Hello "
 el2.style.color='black';
 const newElement=document.createElement('h2')
 newElement.innerText='New element add to dom';
 document.querySelector("body").appendChild(newElement)

 const ulList=document.createElement('ul')
 const l1=document.createElement('li')
 l1.innerText="Book 👔"
 const l2=document.createElement('li')
 l2.innerText="TV 📺"
 const l3=document.createElement('li')
 l3.innerText="Car 🚗"
 document.querySelector("body").appendChild(ulList).appendChild(l1).appendChild(l2).appendChild(l3)

 const fun=document.getElementById("code")
 function handleClick(event){
    fun.style.background="red"
    fun.innerText='Did you Click here?'
 }
 fun.addEventListener("click",handleClick)

// create an array of colors 10 colors
//creat a number bewtween 0 -9
// cache th body element
// add event listen to it
//each to user click on body
//background shoul change
let myColor=['blue','yellow','green','black','white','orange','gray','gold','silver']

const body=document.querySelector("body")
let ranNum=Math.round(Math.random()*8)
console.log(ranNum)

function onclick(){
    body.style.background=myColor[ranNum]
}
body.addEventListener("click",onclick)





