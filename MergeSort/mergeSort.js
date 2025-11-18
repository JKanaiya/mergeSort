const process = require("process");

const merge = function (nArr, mArr) {
  let merged = [];
  let tot = nArr.length + mArr.length;
  while (merged.length < tot) {
    if (nArr[0] >= mArr[0]) {
      merged.push(mArr[0]);
      mArr.shift();
    } else if (nArr.length == 0 && mArr.length != 0) {
      merged = unbalancedMerge(merged, mArr);
    } else if (mArr.length == 0 && nArr.length != 0) {
      merged = unbalancedMerge(merged, nArr);
    } else {
      merged.push(nArr[0]);
      nArr.shift();
    }
  }
  return merged;
};

const unbalancedMerge = function (MainArr, subArr) {
  return [...MainArr, ...subArr];
};

const mergeSort = function (arr) {
  if (arr.length <= 1) return arr;
  return merge(
    mergeSort(arr.slice(0, arr.length / 2)),
    mergeSort(arr.slice(arr.length / 2)),
  );
};

if (process.argv[2]) {
  const arr = process.argv[2].split(",");
  console.log(mergeSort(arr));
} else {
  console.log(mergeSort([1, 4, 6, 8, 2, 3, 5, 7, 9]));
}
