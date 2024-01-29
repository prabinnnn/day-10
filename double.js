const double = (solution) => {
  return solution;
};
const doublestring = (string, callback) => {
  arr = string.split("");
  const vrcount = arr.map((char, index) =>
    Array(index + 1)
      .fill(char)
      .join("")
  );
  return callback(vrcount.join(""));
};
const newdoublestr = doublestring("Adrian", double);
console.log(newdoublestr);
