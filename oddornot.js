const number = (solution) => {
  return solution;
};

const oddoreven = (num, callback) => {
  if (num % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
  return callback(num);
};

const newodd = oddoreven(12, number);
