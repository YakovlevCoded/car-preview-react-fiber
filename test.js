var mergeTwoArrays = function (arr1, arr2) {
  let result = [];
  let firstIndex = 0;
  let secondIndex = 0;

  if (!arr1.length) {
    return arr2;
  }

  if (!arr2.length) {
    return arr1;
  }

  // Merge the two arrays
  for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (arr1[firstIndex] <= arr2[secondIndex] || !arr2[secondIndex]) {
      result.push(arr1[firstIndex]);
      firstIndex++;
    } else {
      result.push(arr2[secondIndex]);
      secondIndex++;
    }
  }

  return result;
};

console.log(mergeTwoArrays([1, 3], [7, 8, 10, 12]));
