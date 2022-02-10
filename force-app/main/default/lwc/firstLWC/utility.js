var pname = "nikhil";
var lname = '';
function printName(input)
{
    console.log(input);
}

export {pname as PersonName,printName,lname}
export default function SetName(lastName)
{
    lname = lastName;
}
