const display = (solution) => {
  return solution;
};

const doublestr = (string, callback) => {
  const arr = string
    .split("")
    .map((char) => {
      return `${char}${char}`; // Added "return" here to return the doubled characters
    })
    .join("");
  return callback(arr, display);
};

const newdouble = (string) => {
  return doublestr(string, display);
};

const result = newdouble("aridan");
console.log(result);
