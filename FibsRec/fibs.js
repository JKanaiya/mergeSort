const fibs = function (j) {
  let arr = [];
  for (n = 0; n < j; n++) {
    if (n < 2) arr[n] = n;
    else arr[n] = arr[n - 1] + arr[n - 2];
  }
  return arr;
};

console.log(fibs(8));

let arr = [];
let b = 0;
const fibsRec = function (n) {
  if (b < 2) {
    arr[b] = b;
    return fibsRec(n, ++b);
  }
  if (b == n) return arr;
  arr[b] = arr[b - 1] + arr[b - 2];
  return fibsRec(n, ++b);
};

console.log(fibsRec(8));
