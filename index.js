// npm install prompt-sync - kom ihåg att denna var tvungen att installeras för att följande stycke skulle fungera.

//console.log("You have your backpack in hand \nWhat is your choice?");
const prompt = require("prompt-sync")();

let price = "banana";
let message = isNaN(price)
  ? "write a number"
  : price >= 18
  ? "much money"
  : "little money";

console.log(message);
