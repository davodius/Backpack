const prompt = require("prompt-sync")();

// Creating backpack array
let stuffInBag = ["BBBB", "AAAA", "DDDD", "CCCC"];
while (true) {
  stuffInBag.sort();

  console.log("what are you adding? ");
  let thingPutInBag = prompt();

  if (thingPutInBag === isNaN) {
    //run prog
    stuffInBag.push(thingPutInBag);
    console.log(`added ${thingPutInBag} to the backpack.`);
    console.log(`the bag now contains the following: ${stuffInBag}`);
    console.log("----------------");

    console.log(
      "press [enter] to add a new item\n----------------\nenter [m] to go back to the menu\n----------------\nenter [c] for closing the backpack "
    );

    let afterAddedToArrayChoice = prompt();

    if (afterAddedToArrayChoice === "c") {
      console.log("You've closed the backpack.\n================ "),
        process.exit();
    } else if (afterAddedToArrayChoice === "") {
      console.log("================ ");
    } else if (afterAddedToArrayChoice === "m") {
      console.log("================ ");
      // put break here to close the adding function so the loop take back to menu -- rember
    }
  } else if (isNaN(thingPutInBag) === false) {
    console.log(
      "you cant put a number in a bag you silly goose\n---------------- "
    );

    console.log(
      "press [enter] to add a new item\n----------------\nenter [m] to go back to the menu\n----------------\nenter [c] for closing the backpack "
    );

    let afterAddedToArrayChoice = prompt();

    if (afterAddedToArrayChoice === "c") {
      console.log("You've closed the backpack.\n================ "),
        process.exit();
    } else if (afterAddedToArrayChoice === "") {
      console.log("================ ");
    } else if (afterAddedToArrayChoice === "m") {
      console.log("================ ");
      // put break here to close the adding function so the loop take back to menu -- rember
    }
  } // here the silly goose gib menu retry item adding ends (above).

  // this was the prog that got moved into the if in the beginning(below)
  /* stuffInBag.push(thingPutInBag);
  console.log(`added ${thingPutInBag} to the backpack.`);
  console.log(`the bag now contains the following: ${stuffInBag}`);
  console.log("----------------");

  console.log(
    "press [enter] to add a new item\n----------------\nenter [m] to go back to the menu\n----------------\nenter [c] for closing the backpack "
  );

  let afterAddedToArrayChoice = prompt();

  if (afterAddedToArrayChoice === "c") {
    console.log("You've closed the backpack.\n================ "),
      process.exit();
  } else if (afterAddedToArrayChoice === "") {
    console.log("================ ");
  } else if (afterAddedToArrayChoice === "m") {
    console.log("================ ");
    // put break here to close the adding function so the loop take back to menu -- rember
  } */

  // kom ihåg att fixa: bara bokstäver skall tas emot/ inga siffror
  //+ kunna lägga till hur många man vill (loopa, tror while true blir bra). - klar
  // stänga väskan för att klar - klar
  // gå tillbaka till menyn - prova med breaken sen. <====== kom ihåg!!
  // lägga till en ny - klar
}
