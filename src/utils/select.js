import { data } from "../data/data";

export function select() {
  console.time("s");
  const courses = [];
  for (let x of data) {
    if ((courses.slice(-1)[0] || {}).No === x.No) {
      courses[courses.length - 1].lists.push(x);
    } else courses.push({ name: x.name, No: x.No, lists: [x] });
  }
  return courses;
}
