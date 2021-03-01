const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!
const color1 = getInput(1);
const color2 = getInput(2);
//console.log(color1);
//console.log(color2);


//   if (colorDeconstructor(color1)) {
//    console.log(colorDeconstructor(color1))
//  }

//  if (colorCombinator(color1, color2)) {
//    console.log(colorCombinator(color1, color2))
//  }

// else if {
//   console.log('That is not a valid entry.');
// }

if (color1 === undefined && color2 === undefined) {
    console.log('No colors were provided!')
}

else if (color1 !== undefined && color2 === undefined) {
    const isColorValid = isValidSecondary(color1)
    if (isColorValid) {
        const deconstruction = colorDeconstructor(color1)
        console.log('Deconstruction is', deconstruction);
    } else {
        console.log('The color is not a valid secondary color.')
    }
}

else {
    const isColor1Valid = isValidPrimary(color1);
    const isColor2Valid = isValidPrimary(color2);
    if (isColor1Valid && isColor2Valid) {
        const combo = colorCombinator(color1, color2)
        console.log('Those combine to make', combo)
    } else {
        console.log('One of the colors are not a primary color.')
    }
}