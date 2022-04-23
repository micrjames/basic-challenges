const highestNumInArray = arr => {
   	let highest = 0;
   	arr.forEach(num => {
	   if(num > highest) highest = num; 
	});
    return highest;
};

module.exports = highestNumInArray;
