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
    if (argumentCopy.length >2 ) {
      return argumentCopy.includes( Number(sampleStr) );
    }
   
    if (argumentCopy.length === 1) {
        return (Number(cardNum[0]) === argumentCopy[0]);
    }
    if (Number(sampleStr) === argumentCopy[0] || Number(sampleStr) === argumentCopy[1]) {
        return true;
    } 
    return false;
  }
}



var detectNetwork = function(cardNumber) {
 
  // Note: `cardNumber` will always be a string
  
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  let checkDiner = isPrefix(38,39);
  let checkAmex = isPrefix(34,37);
  let checkVisa = isPrefix(4);
  let checkMast = isPrefix(51,52,53,54,55);
  let checkDiscWeird = isPrefix(60); //need that 11
  let checkDiscWeird2 = isPrefix(11);
  let checkDiscRange =isPrefix(64); //need 5-9

  let checkDisc65= isPrefix(65);
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  //Visa always has a prefix of 4 and a length of 13, 16, or 19.

  let cardLength = cardNumber.length;
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




