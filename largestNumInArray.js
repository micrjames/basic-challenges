const largestNumInArray = arr => {
   	let longestLength = 0;
    arr.forEach(word => {
	    if(word.length > longestLength) longestLength = word.length;
	});
    return longestLength;
};

module.exports = largestNumInArray;
