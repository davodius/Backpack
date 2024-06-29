// npm install prompt-sync - kom ihåg
// const/ let variabelNamn = prompt()
// för läsning i terminalen.
// + const prompt = require("prompt-sync")();
// början av prog. hämta funktionen
const prompt = require("prompt-sync")();

// Creating backpack array
let stuffInBag = ["banana", "ananas", "mango", "lime"];

console.log(
  "select the number of what you want to do with your backpack \n [1] -> put something in the bag \n [2] -> remove something from the bag \n [3] -> see whats in the bag "
);

const choice = prompt();

switch (choice) {
  case "1":
    console.log("what are you adding? ");
    let thingPutInBag = prompt();

    stuffInBag.push(thingPutInBag);
    console.log(`added ${thingPutInBag} to the backpack.`);
    console.log(`the bag contains the following ${stuffInBag}`);

    break;

  case "2":
    console.log("select the id of what you wish to remove: ");
    stuffInBag.sort();
    stuffInBag.forEach((element, index) => {
      console.log(`${index + 1}: ${element}`);
    });
    let removeItemFromBag = prompt();

    stuffInBag.splice(removeItemFromBag, 1);
    stuffInBag.sort();
    stuffInBag.forEach((element, index) => {
      console.log(`${index + 1}: ${element}`);
    });

    break;

  case "3":
    console.log("the bag has: ");
    stuffInBag.sort();
    stuffInBag.forEach((element, index) => {
      console.log(`${index + 1}: ${element}`);
    });
    //console.log(`${stuffInBag},`stuffInBag.indexOf.(${stuffInBag}));

    break;

  default:
    console.log("you need to pick 1-3 ");
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
