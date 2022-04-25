// Pass an array of two numbers. Return the sum of those two numbers plus the sum of all
// the numbers between them. The lowest number will not always come first.

const sumBetweenArr = arr => {
    let sumArrLen; 
    let sumArrStart;
    if(arr[0] > arr[1]) {
	   sumArrStart = arr[1];
	} else if(arr[1] > arr[0]) {
	   sumArrStart = arr[0];
	} else {
	   return;
	}
    sumArrLen = Math.abs(arr[1] - arr[0])+1;
   	const sumArr = Array.from({length: sumArrLen}, (_,i) => sumArrStart+i);
    return sumArr.reduce((previous, current) => previous+current);
};

module.exports = sumBetweenArr;
