
let turn=1;
let tied=0;
let upoints=0;
let cpoints=0;
while(turn<=5)
{
    let user=prompt("let's play water, snake and gun!! \nChoose")

let computer=Math.floor(Math.random()*3)
let computerV=["s", "g" ,"w"][computer]

const match=(user, computerV)=>{
    if(user ===computerV)
    {
        tied++
        return("match tied")
        
    }
    else if(user==="s" && computerV==="g")
    {   cpoints++
        return("computer won")
    }
    else if(user==="s" && computerV==="w")
    {   upoints++
        return("You won")
    }
    else if(user==="g" && computerV==="s")
    {   upoints++
        return("You won")
    }
    else if(user==="g" && computerV==="w")
    {   cpoints++
        return("Computer won")
    }
    else if(user==="w" && computerV==="s")
    {   cpoints++
        return("Computer won")
    }
    else if(user==="w" && computerV==="g")
    {   upoints++
        return("You won")
    }
}

let result=match(user,computerV)

console.log(`computer: ${computerV}\nUser: ${user}\n${result}`)
turn++;
}

let winner;
if(upoints>cpoints)
{
    winner= "You won"
}
else if(upoints<cpoints){
    winner="Computer won"
}
else {
    winner="Match tied"
}
console.warn(`Your points:${upoints} \nComputer points:${cpoints}\nTied:${tied} \n${winner}`)