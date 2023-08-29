

function overlap(A, B) {
  const sameDays = findSameDays(A.days, B.days);
  if (!sameDays.length) return false;

  return sameDays.some((sameDay) => {
    return (
      overlapInterval(
        A.time[A.days.indexOf(sameDay)],
        B.time[B.days.indexOf(sameDay)]
      ) ||
      overlapInterval(
        A.time[A.days.lastIndexOf(sameDay)],
        B.time[B.days.indexOf(sameDay)]
      ) ||
      overlapInterval(
        A.time[A.days.indexOf(sameDay)],
        B.time[B.days.lastIndexOf(sameDay)]
      ) ||
      overlapInterval(
        A.time[A.days.lastIndexOf(sameDay)],
        B.time[B.days.lastIndexOf(sameDay)]
      )
    );
  });
}

const findSameDays = (dayA, dayB) =>
  dayA
    .filter((day) => dayB.includes(day))
    .filter((value, index, array) => {
      return array.indexOf(value) === index;
    });

const overlapInterval = (timeA, timeB) =>
  timeA.start < timeB.end && timeB.start < timeA.end;

console.log(
  overlap(
    {
      ID: 257433,
      No: 25743,
      GNo: 3,
      unit: 4,
      name: "مدارهای منطقی وسیستم دیجیتال و آز",
      professor: "محمود تابنده",
      days: [1, 3],
      time: [
        { start: 10.5, end: 12 },
        { start: 10.5, end: 12 },
        
      ],
      days2: "یک‌شنبه و سه‌شنبه 10:30 تا 12، یک‌شنبه 13 تا 16",
    },
    {
      ID: 250022,
      No: 25002,
      GNo: 2,
      unit: 1,
      name: "آز الکترونیک ۱ ",
      professor: "مرتضی غفورزاده",
      days: [1],
      time: [{ start: 13, end: 16 }],
      days2: "یک‌شنبه 13 تا 16",
    }
  )
);
