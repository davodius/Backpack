// npm install prompt-sync - kom ihåg att denna var tvungen att installeras för att följande stycke skulle fungera.

const prompt = require("prompt-sync")();

// const thingPutInBag = prompt();

/* // Creating backpack
class Backpack {
  constructor() {
    this.thingPutInBag = [];
  }
 */
let choice = prompt();

switch (choice) {
  case "1":
    console.log("1 was chosen");
    break;

  case "2":
    console.log("2 was chosen");
    break;

  case "3":
    console.log("3 was chosen");
    break;

  default:
    console.log("you need to pick 1-3");
    break;
}

/* addThingPutInBag(thingPutInBag) {
    this.thingPutInBag.push(thingPutInBag);
    console.log(`${thingPutInBag} added that to the backpack.`);
  }

  removeThingPutInBag(thingPutInBag) {
    const thingPutInBagIndex = this.thingPutInBags.indexOf(thingPutInBag);
    if (thingPutInBagIndex !== -1) {
      this.thingPutInBags.splice(thingPutInBagIndex, 1);
      console.log(`${thingPutInBag} removed from the backpack.`);
    } else {
      console.log(`${thingPutInBag} not found in the backpack.`);
    }
  }

  listThingsPutInBag() {
    if (this.thingsPutInBag.length === 0) {
      console.log("The backpack is empty.");
    } else {
      console.log("ThingsPutInBag in the backpack:");
      this.thingsPutInBag.forEach((thingPutInBag) =>
        console.log(thingPutInBag)
      );
    }
  }

  // Method to check if a specific thingPutInBag is in the backpack
  hasThingPutInBag(thingPutInBag) {
    const hasThingPutInBag = this.thingsPutInBag.includes(thingPutInBag);
    if (hasThingPutInBag) {
      console.log(`The backpack contains ${thingPutInBag}.`);
    } else {
      console.log(`The backpack does not contain ${thingPutInBag}.`);
    }
    return hasThingPutInBag;
  }
}
 */
