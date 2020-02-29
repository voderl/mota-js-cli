function quickSort(arr) {
  // 设置基准值
  const len = arr.length;
  if (len <= 1) return arr;
  const base = arr[0];
  const left = [];
  const right = [];
  let now;
  for (let i = 1; i < len; i++) {
    now = arr[i];
    if (now < base) left.push(now);
    else right.push(now);
  }
  return [...quickSort(left), base, ...quickSort(right)];
}

const swap = (arr, i, j) => {
  if (i === j) return;
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
};
function divide(arr, from = 0, to = arr.length - 1) {
  if (from >= to) return [];
  const base = arr[from];
  let p = from + 1;
  for (let i = p; i <= to; i++) {
    if (arr[i] < base) {
      swap(arr, p, i);
      p += 1;
    }
  }
  swap(arr, p - 1, from);
  return [[from, p - 2], [p, to]];
}
function quickSort2(arr) {
  const stack = [];
  stack.push([0, arr.length - 1]);
  while (stack.length !== 0) {
    const limit = stack.pop();
    const [left, right] = divide(arr, ...limit);
    if (left instanceof Array) stack.push(left);
    if (right instanceof Array) stack.push(right);
  }
  return arr;
}
const arr = [0, 1];
console.log(quickSort(arr));
console.log(arr);
console.log(quickSort2(arr));
console.log(arr);
