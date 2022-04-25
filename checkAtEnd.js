// Check if a string(first argument, str) ends with the given target string(second argument, target).
// use one of the JavaScript substring methods instead.
const checkAtEnd = (str, target) => {
   // get the ending string from str
   const targetIndex = str.length - target.length;
   const strTarget = str.slice(targetIndex);
   if(target === strTarget) {
	  return true;
   }
   return false;
};

module.exports = checkAtEnd;
