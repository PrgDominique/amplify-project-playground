let counter = 0;
const sampleTest = callback => {
  counter++;
  callback(counter);
};

module.exports = { sampleTest };
