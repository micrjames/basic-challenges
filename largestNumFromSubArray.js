const highestNumInArray = require('./highestNumInArray');

// Return an array consisting of the largest number from each provided sub-array.
const largestNumFromSubArray = arrSets => {
   let largestArr = [];
   let highestNum;	
   arrSets.forEach(arrSet => {
	  	highestNum = highestNumInArray(arrSet);
	    largestArr.push(highestNum);
   });
   return largestArr;
};

module.exports = largestNumFromSubArray;
