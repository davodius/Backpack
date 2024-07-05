// npm install prompt-sync - kom ihåg
// const/ let variabelNamn = prompt()
// för läsning i terminalen.
// + const prompt = require("prompt-sync")();
// början av prog. hämta funktionen
const prompt = require("prompt-sync")();

// Creating backpack array
let stuffInBag = ["BBBB", "AAAA", "DDDD", "CCCC"];
stuffInBag.sort();

console.log(
  "select the number of what you want to do with your backpack \n[1] -> put something in the bag \n[2] -> remove something from the bag \n[3] -> see whats in the bag \n[4] -> close the bag \n "
);

const choice = prompt();

switch (choice) {
  case "1":
    while (true) {
      stuffInBag.sort();

      console.log("what are you adding? ");
      let thingPutInBag = prompt();

      if (isNaN(thingPutInBag)) {
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
          break;
          // put break here to close the adding function so the loop take back to menu -- rember
        }
      }

      if (thingPutInBag === null || thingPutInBag === 0 || thingPutInBag < 0) {
        console.log("you can't add something that doesn't exist  ");

        console.log(
          "press [enter] to try a new item\n----------------\nenter [m] to go back to the menu\n----------------\nenter [c] for closing the backpack "
        );

        let afterAddedToArrayChoice = prompt();

        if (afterAddedToArrayChoice === "c") {
          console.log("You've closed the backpack.\n================ "),
            process.exit();
          break;
        } else if (afterAddedToArrayChoice === "") {
          console.log("================ ");
          break;
        } else if (afterAddedToArrayChoice === "m") {
          console.log("================g ");
          break;
          // put break here to close the adding function so the loop take back to menu -- rember
        }
      } else {
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
          break;
        } else if (afterAddedToArrayChoice === "") {
          console.log("================ ");
          break;
        } else if (afterAddedToArrayChoice === "m") {
          console.log("================ ");
          break;
          // put break here to close the adding function so the loop take back to menu -- rember
        }
        break;
      } // here the silly goose gib menu retry item adding ends (above).
    }

  case "2":
    while (true) {
      if (stuffInBag.length === 0) {
        console.log(
          "the backpack is empty\npress [enter] to close it\npress [m] to return to menu "
        );
        let arrayIsEmptychoice = prompt();

        arrayIsEmptychoice == "m"
          ? console.log("================")
          : (console.log("You've closed the backpack."), process.exit());
      } else {
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
          //console.log(highestIndexValue);
        } else if (isNaN(removeItemFromBag)) {
          console.log(
            `${removeItemFromBag} is not a number\n----------------\nit needs to be a number\n---------------- `
          );
        }

        console.log(
          "press [enter] to try a new index\n----------------\nenter [m] to go back to the menu\n----------------\nenter [c] for closing the backpack "
        );

        let menuReturnChoice = prompt();

        if (menuReturnChoice === "m") {
          console.log("================");
          break;
        } else {
          menuReturnChoice === "c"
            ? (console.log("You've closed the backpack."), process.exit())
            : console.log("================");
        }

        /*  menuReturnChoice == "m"
          ? console.log("================"); break;
          : menuReturnChoice == "c"
          ? (console.log("You've closed the backpack."), process.exit())
          : console.log("================");
 */
      }
    }

    break;

  case "3": // kom ihåg att lägga till returnera till menyn eller stänga väskan efter att du har fått "titta " i väskan.
    console.log("the bag has: ");
    stuffInBag.sort();
    stuffInBag.forEach((element, index) => {
      console.log(`${index}: ${element}`);
      console.log("----------------");
    });
    console.log(
      "enter [m] to go back to the menu\n----------------\npress [enter] to go to close the bag "
    );

    let choiceForCase3 = prompt();

    if (choiceForCase3 === "") {
      console.log("you've closed the backpack\n================  "),
        process.exit();
    } else if (choiceForCase3 === "m") {
      console.log("================");
      break;
    }

  case "4":
    console.log("you've closed the backpack ");
    process.exit();
    break;

  default:
    if (isNaN(choice)) {
      console.log(
        `It has to be a number\n${choice} is not one\nPress [enter] to try again\n---------------- `
      );
    } else if (choice >= 5 || choice <= 0) {
      console.log(
        "This menu only uses numbers less than 5 in the 1 -> 4 range, press [enter] to retry\n---------------- "
      );
    } else {
      console.log(
        "This menu only uses positive numbers in the 1 -> 4 range, press [enter] to retry\n---------------- "
      );
    }

    console.log("================");

    break;
}

// kom ihåg att göra en för bokstäver från input här som case 5 (isNaN(choice)) typ
/* case isNaN(choice):
    console.log(`it has to be a number, ${choice} is not one, try again`);
    break;

  case choice > 4 || choice === 0:
    console.log("you need to pick a number in the 1 -> 4 range ");

    break; */

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
/* console.log("select the id of what you wish to remove: ");
    stuffInBag.forEach((element, index) => {
      console.log(`${index}: ${element}`);
    });
    let removeItemFromBag = prompt();

    stuffInBag.splice(removeItemFromBag, 1);
    stuffInBag.forEach((element, index) => {
      console.log(`${index}: ${element}`);
    });
 */
