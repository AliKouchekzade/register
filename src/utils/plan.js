let all = JSON.stringify([]);

function combinationUtil(arr, n, r, index, data, i) {
  if (index === r) {
    all = JSON.stringify([...JSON.parse(all), data]);
    return;
  }

  if (i >= n) return;

  if (arr[i].No !== (data[index - 1] || {}).No) {
    data[index] = arr[i];
    combinationUtil(arr, n, r, index + 1, data, i + 1);
  }
  combinationUtil(arr, n, r, index, data, i + 1);
}

export function printCombination(arr, r) {
  let n = arr.length;
  let data = new Array(r);
  data.fill({});
  combinationUtil(arr, n, r, 0, data, 0);
  return JSON.parse(all);
}
