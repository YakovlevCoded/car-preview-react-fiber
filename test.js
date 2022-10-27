var mergeTwoLists = function (list1, list2) {
  let result = [];
  let aIndex = 0;
  let bIndex = 0;

  if (!list1.length) {
    return list2;
  }
  if (!list2.length) {
    return list1;
  }

  for (let i = 0; i < list1.length + list2.length; i++) {
    if (list1[aIndex] <= list2[bIndex] || !list2[bIndex]) {
      result.push(list1[aIndex]);
      aIndex++;
    } else {
      result.push(list2[bIndex]);
      bIndex++;
    }
  }

  return result;
};
