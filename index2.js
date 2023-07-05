let runAgain=true;

while(runAgain){
let age=prompt("enter your age")
age=Number.parseInt(age);

if(age<0)
{
    console.error("Enter valid age")
    break;
}
if(age>=18)
{
    alert("Yes! you can drive")
}
else{
    alert("you cannot drive")
}
runAgain=confirm("Do you want to play again")
}

///q2

let number=prompt("Enter your number")
number=Number.parseInt(number)

if(number>4){
    location.href="https://google.com"
}

//q3

let colour=prompt("choose any colour")
document.body.style.borderColor=colour
// document.body.style.backgroundColor=colour;