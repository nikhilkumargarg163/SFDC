/****Day1 Learning */
/*console.log(window);
var a = 10;
console.log(window.a);
var a = 20;
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
if(a==20)
{
    var z = 100;
    let q = 70;
    const c = 93;
}
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
console.log(a===b);*/

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
console.log(arr6);

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
    age:1,
    infant : true
};
let obj4 = {...obj2,...obj3,...obj5};
console.log(obj4);

let arr10 = ["nikhil","chotu"];
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