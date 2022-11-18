let userName = prompt ("Qual è il tuo nome?"); //NAME
console.log (userName) //CONSOLE PRINT

let surName = prompt ("Qual è il tuo cognome") //SURNAME
console.log (surName); //CONSOLE PRINT

let colorFavourite = prompt ("Qual è il tuo colore preferito?") //FAVOURITE COLOR
console.log (colorFavourite); //CONSOLE PRINT

const number = 22 //CONSTANT NUMBER
//RESULT
document.getElementById("name") .innerHTML = userName + surName + colorFavourite + number;