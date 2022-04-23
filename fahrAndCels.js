const celsToFahr = cels => {
   return 9/5 * cels + 32;
};

const fahrToCels = cels => {
   return (5.0/9.0) * (cels-32);
};

module.exports = { celsToFahr, fahrToCels };
