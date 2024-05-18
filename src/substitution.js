// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    // Validate the alphabet
    if (!alphabet || typeof alphabet !== 'string' || alphabet.length !== 26) return false;
    if ([...new Set(alphabet)].length !== 26) return false; // Check for unique characters

    const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerInput = input.toLowerCase(); // Convert input to lowercase

    let result = '';
    for (let char of lowerInput) {
      // If character is a letter, find its index in the substitution alphabet
      const index = encode ? standardAlphabet.indexOf(char) : alphabet.indexOf(char);
      if (index !== -1) {
        // If encoding, use the substitution alphabet; if decoding, use the standard alphabet
        result += encode ? alphabet[index] : standardAlphabet[index];
      } else {
        // Maintain non-alphabetic characters
        result += char;
      }
    }

    return result;
  }

  return {
    substitution,
  };
})();


module.exports = { substitution: substitutionModule.substitution };
