import hasOverLap from "./overlap";

export function printCombination(selectedCourse, r) {
  const arr = selectedCourse.sort((a, b) => a.No - b.No);
  let all = JSON.stringify([]);
  let n = arr.length;
  let data = new Array(r);
  data.fill({});

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

  combinationUtil(arr, n, r, 0, data, 0);
  return JSON.parse(all).filter((plan) => !hasOverLap(plan));
}
