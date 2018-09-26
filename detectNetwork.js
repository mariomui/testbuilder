// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)
// function isDinerPrefix(cardNum) {
//   let sampleStr = cardNum.toString().slice(0,2);
//   if (Number(sampleStr) === 38 || Number(sampleStr) === 39 ) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isPrefix() {
  let argumentCopy = Array.from(arguments).slice(0);
  return function(cardNum) {
  
    let sampleStr = cardNum.slice(0,2);
    //if i have 2 arguments or more, the sample string (##) will match with everything in argument for a match. 
    if (argumentCopy.length > 1 ) {
      return argumentCopy.includes( Number(sampleStr) );
    }
   //if argument is 1 and its 1-9, then return a match if the first number is a single digit specified.
    if (argumentCopy.length === 1 && argumentCopy[0]%10 === argumentCopy[0]) {
        return (Number(cardNum[0]) === argumentCopy[0]);
    } else {
      return argumentCopy.includes( Number(sampleStr) );
    }
    //if it gets pass all that. let's say it has 2 arguments. it does the same thing as the first part.
    // if (Number(sampleStr) === argumentCopy[0] || Number(sampleStr) === argumentCopy[1]) {
    //     return true;
    // } 
    return false;
  }
}



var detectNetwork = function(cardNumber) {
 
  // Note: `cardNumber` will always be a string
  
  
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  let checkDiner = isPrefix(38,39);
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  let checkAmex = isPrefix(34,37);
  //Visa always has a prefix of 4 and a length of 13, 16, or 19.
  let checkVisa = isPrefix(4);
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  let checkMast = isPrefix(51,52,53,54,55);
  //discover
  let checkDisc60X = isPrefix(60); //need that 11
  let checkDiscX11 = isPrefix(11);
  let checkDisc6X = isPrefix(6); //need 45-49
  let checkDiscX44To49 = isPrefix(44,45,46,47,48,49);
  let checkDisc65 = isPrefix(65);
  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  let checkMae50X = isPrefix(50);
  let checkMaeXn3 = isPrefix(18,20,38);
  //6304
  let checkMae63 = isPrefix(63);
  let checkMae0 = isPrefix(0);
  let checkMae4 = isPrefix(4);


  //====Maestro=======
  let cardLength = cardNumber.length;
  //5018,5020,5038
  if (checkMae50X(cardNumber) && [12,13,14,15,16,17,18,19].includes(cardLength)) {
    if ( checkMaeXn3( cardNumber.slice(2) ) ) {
      return 'Maestro';      
    }
  }
  //6304
  if (checkMae63X(cardNumber) && [12,13,14,15,16,17,18,19].includes(cardLength)) {
    if ( checkMae0( cardNumber.slice(2) ) ) {
      if ( checkMae4( cardNumber.slice(3) ) ) {
        return 'Maestro';
      }
    }
  }
  //==========DISCOVER=============
  if (checkDisc60X(cardNumber) && [16,19].includes(cardLength)) {
    if ( checkDiscX11( cardNumber.slice(2) ) ) {
      return 'Discover';      
    }
  }
  if (checkDisc6X(cardNumber) && [16,19].includes(cardLength)) {
    if (checkDiscX44To49(cardNumber.slice(1))) {
      return 'Discover';
    }
  }
  if (checkDisc65(cardNumber) && [16,19].includes(cardLength) ) {
    return 'Discover';
  }
//==========Basic 4============
  if (checkDiner(cardNumber) && cardLength === 14) {
    return `Diner's Club`;
  }
  if (checkAmex(cardNumber) && cardLength === 15) {
    return 'American Express'; //i really want to do double quotes but a coder friend told me to do single.
  }
  if (checkVisa(cardNumber) && [13,16,19].includes(cardLength) ) {
    return 'Visa';
  }
  if (checkMast(cardNumber) && cardLength === 16) {
    return 'MasterCard';
  }
  return "not found";
}

module.exports = detectNetwork;




