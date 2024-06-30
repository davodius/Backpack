const prompt = require("prompt-sync")();

// Creating backpack array
let stuffInBag = ["BBBB", "AAAA", "DDDD", "CCCC"];

stuffInBag.sort();

console.log("what are you adding? ");
let thingPutInBag = prompt();

stuffInBag.push(thingPutInBag);
console.log(`added ${thingPutInBag} to the backpack.`);
console.log(`the bag now contains the following: ${stuffInBag}`);
console.log("----------------");

// kom ihåg att fixa: bara bokstäver skall tas emot/ inga siffror
//+ kunna lägga till hur många man vill (loopa, tror while true blir bra).
