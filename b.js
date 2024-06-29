const prompt = require("prompt-sync")();

// Creating backpack array
let stuffInBag = ["BBBB", "AAAA", "DDDD", "CCCC"];
stuffInBag.sort();

console.log("select the id of what you wish to remove: ");
stuffInBag.forEach((element, index) => {
  console.log(`${index + 1}: ${element}`);
});
let removeItemFromBag = prompt();

// Convert user input to zero-based index
let removeIndex = removeItemFromBag - 1;

if (removeIndex >= 0 && removeIndex < stuffInBag.length) {
  stuffInBag.splice(removeIndex, 1);
}

stuffInBag.forEach((element, index) => {
  console.log(`${index + 1}: ${element}`);
});

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
