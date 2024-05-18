// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift < -25 || shift > 25) return false;
   const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  // Define a function to encode or decode a single character
  const shiftChar = (char, shift) => {
    const lowerChar = char.toLowerCase();
    const index = alphabet.indexOf(lowerChar);
    if (index === -1) return char; // If not an alphabet letter, return as is
    let newIndex = index + shift;
     if (newIndex < 0) newIndex = alphabet.length + newIndex;
   else if (newIndex >= alphabet.length) newIndex = newIndex % alphabet.length;
  return alphabet[newIndex];  
  };
 // Encode or decode the input text
  const result = input.split('').map(char => {
    // Encode or decode alphabetic characters, leave non-alphabetic characters unchanged
   return /[a-zA-Z]/.test(char) ? shiftChar(char, encode ? shift : -shift) : char;
  }).join('');

  return result;
}
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
