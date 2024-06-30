const prompt = require("prompt-sync")();

// Creating backpack array
let stuffInBag = ["BBBB", "AAAA", "DDDD", "CCCC"];
stuffInBag.sort();

while (true) {
  console.log("select the id of what you wish to remove: ");

  stuffInBag.forEach((element, index) => {
    console.log(`${index + 1}: ${element}`);
    console.log("----------------");
  });
  let removeItemFromBag = prompt();

  let highestIndex = stuffInBag.length - 1;

  if (removeItemFromBag >= 1) {
    // Convert user input to zero-based index
    let removeIndex = removeItemFromBag - 1;

    if (removeIndex >= 0 && removeIndex < stuffInBag.length) {
      stuffInBag.splice(removeIndex, 1);
    }

    stuffInBag.forEach((element, index) => {
      console.log(`${index + 1}: ${element}`);
    });
  }
  if (removeItemFromBag > stuffInBag.length - 1) {
    console.log("that id does not exist ");
    //console.log(highestIndexValue); // Output: 50
  }

  console.log("write [m] to go to the menu and [c] to close the backpack ");

  let menuReturnChoice = prompt();

  menuReturnChoice == "n"
    ? (console.log("You've closed the backpack."), process.exit())
    : console.log("================");
}
/* const prompt = require("prompt-sync")();

// Creating backpack array
let stuffInBag = ["BBBB", "AAAA", "DDDD", "CCCC"];
stuffInBag.sort();

console.log("select the id of what you wish to remove: ");
stuffInBag.forEach((element, index) => {
  console.log(`${index}: ${element}`);
});
let removeItemFromBag = prompt();

stuffInBag.splice(removeItemFromBag, 1);
stuffInBag.forEach((element, index) => {
  console.log(`${index}: ${element}`);
});
 */
