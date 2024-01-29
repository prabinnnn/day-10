const display = (solution) => {
  return solution;
};
const doublestr = (string, callback) => {
  const arr = string
    .split("")
    .map((char) => {
      `${char} ${char}`;
    })
    .join("");
  return callback(arr, display);
};

const newdouble = (string) => {
  return doublestr(string, display);
};

const result = newdouble("aridan");
console.log(result);
