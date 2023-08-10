const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const sum = (arr) => arr.reduce((a, b) => a + b, 0);

const divide = (arr, n) => {
  const ind = arr.findIndex((e, i) => sum(arr.slice(0, i + 1)) > n);
  return ind < 0 ? [arr] : [arr.slice(0, ind + 1), ...divide(arr.slice(ind + 1), n)];
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
 