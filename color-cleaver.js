const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!
const color1 = getInput(1);
const color2 = getInput(2);

if (colorDeconstructor(color1) === colorDeconstructor('orange')) {
  console.log('That color is made up of red and yellow!!')
  
}

if (colorDeconstructor(color1) === colorDeconstructor('purple')) {
  console.log('That color is made up of red and blue!!')
}

if (colorDeconstructor(color1) === colorDeconstructor('green')) {
  console.log('That color is made up of blue and yellow!!');
} 

if(colorCombinator(color1, color2) === colorCombinator('red', 'yellow') ||
colorCombinator('yellow', 'red')) {
  console.log('Those two colors combine to make orange!');
} 
if(colorCombinator(color1, color2) === colorCombinator('blue', 'red') ||
colorCombinator('red', 'blue')) {
  console.log('Those two colors combine to make purple!');
}



 if(!isValidPrimary(color1)) {
   console.log("That isn't a primary color!")
 }else if(!isValidPrimary(color2)) {
  console.log("That isn't a primary color!")
} else {
  console.log("That isn't a color.")
}


 if (!isValidSecondary(color1)) {
   console.log("Those aren't secondary colors!")
 } else if (!isValidSecondary(color2)) {
  console.log("Those aren't secondary colors!")
} else {
  console.log("That isn't a color.")
}
