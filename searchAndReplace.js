const titleCase = require('./titleCase');

// Perform a search and replace on a sentence and return the new
// sentence. First argument is the sentence to perform the search and replace on. Second argument is
// the word that you will be replacing (before). Third argument is what you will be replacing the second
// argument with (after).
const searchAndReplace = (sentence, word, repWord) => {
    // divide the sentence into an array of words
    const sentenceArr = sentence.split(' '); 
    
    // check if word is contained in the sentence
    if(sentenceArr.some(item => item === word)) {
	    for(let i=0; i<sentenceArr.length; i++) {
		   // TODO: retain case of original word in sentence
		   if(sentenceArr[i] === word) {
			   sentenceArr[i] = repWord;
		   }
		}
	} else {
	    // check if the word matches, but next to a non-word character like a comma, period, etc.
	    // check if there is a semi-colon, period, or a comma at the end of any word, here
	    for(let i=0; i<sentenceArr.length; i++) {
		    if(/[;.,]/.test(sentenceArr[i])) {
			    // any of these character should be at the end of the word
			    const wordCharacters = sentenceArr[i].slice(0,sentenceArr[i].length-1);
			    const endingCharacter = sentenceArr[i][sentenceArr[i].length-1];
			    if(wordCharacters === word) {
					 sentenceArr[i] = repWord + endingCharacter;
				}
			}
		}	    
	}
	// return sentenceArr.join(' ');
};

module.exports = searchAndReplace;
