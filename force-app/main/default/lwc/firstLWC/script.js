/****Day1 Learning */
/*console.log(window);
var a = 10;
console.log(a);
if(a==10)
{
    var z = 100;
    let q = 70;
    const c = 93;
}
console.log(z);
const p = "tets";

var a = Symbol("test");
console.log(a);
/*var a = 20;
console.log(a);
a=44;
console.log(this.a);
let p = 90;
console.log(p);
console.log(window.p);
p=75;
console.log(this.p);
const b = 11;
console.log(b);
console.log(window.b);
console.log(this.b);

console.log(z);
function test()
{
    var x = 23;
    let q = 70;
    const c = 89;
}

var a = 10.11;
console.log(typeof a);
var a = 12n;
console.log(typeof a);
var a = true;
console.log(typeof a);
var x;
console.log(typeof x);
var a = {};
console.log(typeof a);
var a = [];
console.log(typeof a);
var a = Symbol("test");
console.log(typeof a);

console.log(typeof new String("test"));

var a = null;
console.log(typeof a);

console.log(3==="3");
console.log("false"==false)
var a;
console.log(a);
var b = null;
console.log(b);
console.log(a===b);

var arr = [1,3,4];
console.log(arr);
arr.push("test");
console.log(arr);

var obj = {
    "name":"nikhil",
    "age":89,
    "phone number":190099
}
console.log(obj);
console.log(obj.name);
console.log(obj["phone number"]);

let arr1 = ["Nannu","chotu"];
let arr2 = ["chhatipeeta","Biskhopda"];
let arr3 = [...arr1, ...arr2];
console.log(arr3);
let text = "Nannu Bansal";
let charList = [...text];
console.log(charList);
let arr4  = ["nikhil",...arr3];
console.log(arr4);
let arr5 = [1,3,2,4];
let arr6 = [...arr5,"nikhil"];
console.log(arr6);*/

let obj2 = {
    name:"nikhil",
    age:30,
    dob:"31 Oct 1994"
};
let obj3 = {
    name : "nannu",
    age : 4,
    class:"UKG"
}
let obj5 = 
{
    name:"chotu",
    infant : true
};
let obj4 = {...obj2,...obj3,...obj5};
console.log(obj4);

/*let arr10 = ["nikhil","chotu"];
let arr11 = arr10;
arr11.push("nannu");
console.log(arr10);
console.log(arr11);
arr11 = [...arr10];
arr11 = [...arr11,"test"];
console.log(arr10);
console.log(arr11);
arr11 = [...arr10];
arr11.push("chatipita");
console.log(arr10);
console.log(arr11);

let obj10= [{name:"nikhil"},{name:"chotu"}];
let obj11 = obj10;
obj11[0].name = "nannu";
console.log(obj10);
console.log(obj11);

let obj12 = [...obj10];
obj12[0].name = "nikhil";
console.log(obj10);
console.log(obj11);
console.log(obj12);

let obj14 = JSON.parse(JSON.stringify(obj10));
obj14[0].name = "test123";
console.log(obj10);
console.log(obj11);
console.log(obj12);
console.log(obj14);

var arr1 = ["nikhil","chotu","nannu"];
var [name1,name2,name3] = arr1;
console.log(name1);
console.log(name2);
console.log(name3);

var obj1 = {name:"nannu", age:4,dob:"16/03/2017"};
let {name,age,dob}= obj1;
console.log(dob);
console.log(name);

let a= 10,b=20;
let str = "sum of "+ a+ " "+b+" is "+ a+b;
console.log(str);
str = `sum of ${a} and ${b} is ${a+b}`;
console.log(str);

let str = 'my name is amar akbar anthony name pe mat jao';
console.log(str.indexOf('name'));
console.log(str.indexOf('nannu'));
console.log(str.startsWith("my"));
console.log(str.includes('nannu'));
console.log(str.includes('amar'));
console.log(str.slice(11,15));

let obj = {name:"nannu", age :4, dob:"16/03/2017"};
console.log(Object.keys(obj));
console.log(Object.values(obj));
let str = JSON.stringify(obj);
console.log(str);
console.log(JSON.parse(str));

var arr = [11,5,7,31,13];
var newArray = arr.map(function(currentItem,index,actualArray){
    console.log(`current Item ${currentItem} Index ${index} original Array ${actualArray}`);
    return currentItem +2;
});
console.log(arr);
console.log(newArray);

var filteredArray = arr.filter(function(currentItem, index, actualArray){
    console.log(`current Item ${currentItem} index ${index} actualArray ${actualArray}`);
    return currentItem > 10
});
console.log(arr);
console.log(filteredArray);
var everyTest = newArray.every(function(currentItem){
    return currentItem > 15;
});
var someTest = newArray.some(function(currentItem){
    return currentItem > 15;
});
console.log(everyTest);
console.log(someTest);

var sortedarr = filteredArray.sort(function(a,b){
    return b-a;
})
console.log(sortedarr)
let strArr = ["nikhil","chotu","nannu"];
console.log(strArr.sort());

var sum = sortedarr.reduce(function(total,currentItem,index,actualArray){
    return total+currentItem;
},10);
console.log(sum)

sortedarr.forEach(function(currentitem,index,actualArray){
    console.log(currentitem.toString())
})

function promiseLearn(data){
    return new Promise(function(resolve,reject){
    if(data === 'Success')
    {
        return resolve("Successfully Done");
    }else{
        return reject("unsuccessfully Done");
    }
})
};
promiseLearn("error ").then(function(data)
{
    console.log(data);
}).catch(function(data){
    console.error(data);
});

import SetName,{PersonName,printName,lname} from './utility.js'

printName(PersonName);    
SetName("garg");
console.log(lname)

import setName,* as importDetail from './utility.js'
importDetail.printName(importDetail.PersonName);
setName("garg");
console.log(importDetail.lname)*/

/*let element = document.querySelector('div');
console.log(element);
element.style.color = 'green';
console.log(element);

let elementsAll = document.querySelectorAll('div');
console.log(elementsAll);
elementsAll.forEach(function(item){
    item.style.color = 'red';
    console.log(item);
});
let div1 = document.querySelector(".div1");
function mousemoveHandler()
{
    let div2 = document.querySelector(".div2")
    div2.innerHTML = Math.random()
}
div1.addEventListener("mousemove",mousemoveHandler);
function removeHandler()
{
    div1.removeEventListener("mousemove",mousemoveHandler);
}


let btn = document.querySelector('button')
btn.addEventListener("click",removeHandler)

function customEventCall()
{
    let event = new CustomEvent("customDivEvent",{detail:{name: "chotu", age:1}});
    document.dispatchEvent(event);
    //console.log(event);
}
window.customEventCall = customEventCall;
let mainDiv = document.querySelector(".main-div");
document.addEventListener("customDivEvent",function(data){
    mainDiv.innerHTML = mainDiv.innerHTML+ data.detail.name + data.detail.age
});

function test(){
    console.log("function called");
}
test();

var test1 =data => data+10;
console.log(test1(10));

var obj1 = {
    aadmi : "chotu",
    getName : function(){
        console.log(this.aadmi);
        var fullName = () => {console.log(this.aadmi);
        console.log(this.aadmi + " biskhopda");}
        fullName()
    }
}
obj1.getName();*/

// let timeId = setTimeout(function(){
//     console.log("hello");
// },2000)
// console.log(timeId);
// let time2 = setTimeout(function(){
//     console.log("hello 2")
// },2000)
// console.log(time2);
// clearTimeout(timeId)
// let time3 = setTimeout(function(){
//     console.log("hello3")
// },6000)
// console.log(time3)

// let time34 = setInterval(function(){
//     console.log(time3)
// },1000)
// console.log(time34)

// clearInterval(time34);

// let time35 = setInterval(function(){
//     console.log(time34);
// },4000)
// console.log(time35);

// let arr = [5,6,7,8,9,3];
// let newArr = arr.map(item=>item*2)
// console.log(newArr);


/*var btn = document.querySelector('button');
btn.addEventListener("click",()=>{
    console.log(btn.innerHTML);
    btn.innerText = "bhag  ja";
})*/
