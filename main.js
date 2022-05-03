//text assignment
let header = document.querySelector("#header");
let h2 = document.querySelector("#goblinattack")

//buttons
let button1 = document.querySelector("#sword")
let button2 = document.querySelector("#axe")
let button3 = document.querySelector("#dagger")


//damage calculator
let swordDamage = Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
//    console.log(swordDamage);
let axeDamage = 2+ Math.floor(Math.random() * 12) + 1; 
//    console.log(axeDamage);
let dagDamage = Math.floor(Math.random() * 4) + 1 + Math.floor(Math.random() * 4) + 1;
//    console.log(dagDamage);

//function
function chooseWeapon(event){
header.innerText = `You have chosen the ${event.target.innerText}`;
button1.remove();
button2.remove();
button3.remove();
console.log(event.target.innerText);
h2.innerText = `Goblins attack!`
}

//clickable buttons
button1.addEventListener("click", chooseWeapon);
button2.addEventListener("click", chooseWeapon);
button3.addEventListener("click", chooseWeapon);

let Goblin = {
    name : "goblin1",
    hp : 25
}
