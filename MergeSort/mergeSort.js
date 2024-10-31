let lSorted = [];
let rSorted = [];

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
  MainArr = [...MainArr, ...subArr];
  return MainArr;
};

// split as even as possible
let lContainer = [];
let rContainer = [];
let sorted = [];
let rand = [];

const mergeSort = function (arr) {
  if (arr.length <= 1) return arr;

  let l = arr.slice(0, arr.length / 2);
  let r = arr.slice(arr.length / 2);

  lContainer.push(l);
  rContainer.push(r);

  // recursive for left side merge sorting
  lSorted = mergeSort(lContainer[lContainer.length - 1]);
  lContainer.pop();
  // recursive for right side merge sorting
  rSorted = mergeSort(rContainer[rContainer.length - 1]);
  rContainer.pop();

  console.log(lSorted, rSorted);
  return merge(lSorted, rSorted);
};

console.log(mergeSort([4, 1, 2, 6, 3, 7, 8, 12, 11, 17]));
