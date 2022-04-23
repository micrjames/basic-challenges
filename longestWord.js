const largestNumInArray = require('./largestNumInArray');

// Return the length of the longest word in the provided sentence. Returns a number.
const longestWord = str => {
   const words = str.split(' ');
   return largestNumInArray(words);
};

module.exports = longestWord;
