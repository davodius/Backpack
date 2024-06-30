const prompt = require("prompt-sync")();

// Creating backpack array
let stuffInBag = ["BBBB", "AAAA", "DDDD", "CCCC"];
while (true) {
  stuffInBag.sort();

  console.log("what are you adding? ");
  let thingPutInBag = prompt();

  stuffInBag.push(thingPutInBag);
  console.log(`added ${thingPutInBag} to the backpack.`);
  console.log(`the bag now contains the following: ${stuffInBag}`);
  console.log("----------------");

  let afterAddedToArrayChoice = prompt();

  if (afterAddedToArrayChoice === "c") {
    console.log("You've closed the backpack.\n================ "),
      process.exit();
  } else if (afterAddedToArrayChoice === "") {
    console.log("================ ");
  } else if (afterAddedToArrayChoice === "m") {
    console.log("================ ");
    // put break here
  }

  // kom ihåg att fixa: bara bokstäver skall tas emot/ inga siffror
  //+ kunna lägga till hur många man vill (loopa, tror while true blir bra). - klar
  // stänga väskan för att klar - klar
  // gå tillbaka till menyn - prova med breaken sen.
  // lägga till en ny - klar
}
