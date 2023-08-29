function overlap(A, B) {
  const sameDays = findSameDays(A.days, B.days);
  if (!sameDays.length) return false;

  return sameDays.some((sameDay) =>
    overlapInterval(
      A.time[A.days.indexOf(sameDay)],
      B.time[B.days.indexOf(sameDay)]
    )
  );
}

const findSameDays = (dayA, dayB) => dayA.filter((day) => dayB.includes(day));

const overlapInterval = (timeA, timeB) =>
  timeA.start < timeB.end && timeB.start < timeA.end;

export default function hasOverLap(arr, r = 2) {
  let over = false;

  let n = arr.length;
  let data = new Array(r);
  data.fill({});

  function combinationUtil(arr, n, r, index, data, i) {
    if (over) return;

    if (index === r) {
      over = overlap(data[0], data[1]) || over;
      return;
    }

    if (i >= n) return;

    data[index] = arr[i];
    combinationUtil(arr, n, r, index + 1, data, i + 1);

    combinationUtil(arr, n, r, index, data, i + 1);
  }

  combinationUtil(arr, n, r, 0, data, 0);
  return over;
}
