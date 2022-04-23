const revStr = str => {
	return str.split('').reverse().map(letter => letter).join('');
};

module.exports = revStr;
