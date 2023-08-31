import hasOverLap from "./overlap";

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function product() {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(
    function tl(accumulator, value) {
      var tmp = [];
      accumulator.forEach(function (a0) {
        value.forEach(function (a1) {
          tmp.push(a0.concat(a1));
        });
      });
      return tmp;
    },
    [[]]
  );
}

export async function getplans(selectedCourse) {
  const arr = selectedCourse.sort((a, b) => a.No - b.No);

  const courses = [];
  for (let x of arr) {
    if (((courses.slice(-1)[0] || [])[0] || {}).No === x.No) {
      courses[courses.length - 1] = [...courses[courses.length - 1], x];
    } else courses.push([x]);
  }
  await wait(1000);
  let x = product(...courses).filter((plan) => !hasOverLap(plan));
  if (JSON.stringify(x) === "[[]]") x = [];

  return x;
}
