const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const divide = (arr, n) => {
  if (arr.length === 0) return [];

  let subArray = [];
  let currentSum = 0;
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (currentSum + arr[i] <= n) {
      subArray.push(arr[i]);
      currentSum += arr[i];
    } else {
      if (subArray.length > 0) {
        result.push(subArray);
      }
      subArray = [arr[i]];
      currentSum = arr[i];
    }
  }

  if (subArray.length > 0) {
    result.push(subArray);
  }

  return result;
};



const n = prompt("Enter n: ")
alert(JSON.stringify(divide(arr, n)));
