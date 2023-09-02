import { data } from "../data/data";

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export async function showCourses(department = 25) {
  const courses = [];
  for (let x of data) {
    if (Math.floor(x.No / 1000) === department) {
      if ((courses.slice(-1)[0] || {}).No === x.No) {
        courses[courses.length - 1].lists.push(x);
      } else courses.push({ name: x.name, No: x.No, lists: [x] });
    }
  }

  await wait(1000);

  return courses;
}
