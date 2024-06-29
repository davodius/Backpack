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

  if (removeItemFromBag >= 1) {
    // Convert user input to zero-based index
    let removeIndex = removeItemFromBag - 1;

    if (removeIndex >= 0 && removeIndex < stuffInBag.length) {
      stuffInBag.splice(removeIndex, 1);
    }

    stuffInBag.forEach((element, index) => {
      console.log(`${index + 1}: ${element}`);
    });
  } else {
    console.log(
      "you need to press an index number that is more or equal to 1 "
    );
  }

  console.log(
    "write [y] to go back to the menu and [n] to close the backpack "
  );

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
