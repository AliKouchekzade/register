const fs = require("fs");

const courses = [];

const ttt = [
  "چهارشنبه 13 تا 15",
  "دوشنبه 15 تا 17",
  "شنبه 10:30 تا 12:30",
  "دوشنبه 10:30 تا 12:30",
  "سه‌شنبه 8 تا 10",
  "شنبه 13 تا 15",
  "یک‌شنبه 13 تا 15",
  "سه‌شنبه 10:30 تا 12:30",
  "شنبه 15 تا 17",
  "یک‌شنبه 10:30 تا 12:30",
  "دوشنبه 13 تا 15",
  "دوشنبه 8 تا 10",
  "چهارشنبه 10 تا 12",
  "چهارشنبه 8 تا 10",
  "دوشنبه 17 تا 19",
  "یک‌شنبه 15 تا 17",
  "",
  "سه‌شنبه 13 تا 15",
  "سه‌شنبه 15 تا 17",
  "شنبه 8 تا 10",
  "یک‌شنبه 8 تا 10",
];

const time = [
  [{ start: 13, end: 15 }],
  [{ start: 15, end: 17 }],
  [{ start: 10.5, end: 12.5 }],
  [{ start: 10.5, end: 12.5 }],
  [{ start: 8, end: 10 }],
  [{ start: 13, end: 15 }],
  [{ start: 13, end: 15 }],
  [{ start: 10.5, end: 12.5 }],
  [{ start: 15, end: 17 }],
  [{ start: 10.5, end: 12.5 }],
  [{ start: 13, end: 15 }],
  [{ start: 8, end: 10 }],
  [{ start: 10, end: 12 }],
  [{ start: 8, end: 10 }],
  [{ start: 17, end: 19 }],
  [{ start: 15, end: 17 }],
  [{ start: 0, end: 0 }],
  [{ start: 13, end: 15 }],
  [{ start: 15, end: 17 }],
  [{ start: 8, end: 10 }],
  [{ start: 8, end: 10 }],
];
const day = [
  [4],
  [2],
  [0],
  [2],
  [3],
  [0],
  [1],
  [3],
  [0],
  [1],
  [2],
  [2],
  [4],
  [4],
  [2],
  [1],
  [-1],
  [3],
  [3],
  [0],
  [1],
];

const data = courses.map((course) => {
  return {
    ID: course[0] * 100 + course[1],
    No: course[0],
    GNo: course[1],
    unit: course[2],
    name: course[3],
    professor: course[4].concat(
      " (",
      course[6].slice(0, course[6].indexOf("دقت") - 1),
      ")"
    ),
    days: day[ttt.indexOf(course[5])],
    time: time[ttt.indexOf(course[5])],
    days2: course[5],
  };
});

fs.writeFile("src/data/file.json", JSON.stringify(data), (err) => {
  if (err) throw err;
});
