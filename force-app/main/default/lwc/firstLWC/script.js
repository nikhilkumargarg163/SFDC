console.log(window);
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