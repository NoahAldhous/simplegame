
let header = document.querySelector("#header");

let button1 = document.querySelector("#sword")
let button2 = document.querySelector("#axe")
let button3 = document.querySelector("#dagger")

let swordDamage = 6
let axeDamage = 8
let dagDamage = 4

function changeHeader(event){
header.innerText = `You have chosen the ${event.target.innerText}`;
button1.remove();
button2.remove();
button3.remove();
console.log(event.target.innerText);
}

button1.addEventListener("click", changeHeader);
button2.addEventListener("click", changeHeader);
button3.addEventListener("click", changeHeader);

