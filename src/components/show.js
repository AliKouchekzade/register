import hasOverLap from "../utils/overlap";

const Show = ({ res }) => {
  const render = () => {
    const days = [
      "شنبه",
      "یک شنبه",
      "دو شنبه",
      "سه شنبه",
      "چهارشنبه",
      "پنجشنبه",
    ];

    let time = [];
    for (let i = 0; i < 22; i++) {
      time.push(
        <div className="border text-left text-sm relative">
          <span className="absolute top-2 translate-x-1/2">
            {i * 0.5 + 7.5}
          </span>
        </div>
      );
    }

    for (let i = 0; i < 7; i++) {
      time.push(<p className="border col-start-1">{days[i]}</p>);
    }

    return time;
  };

  return (
    <section className="min-h-[400px] border flex-grow rounded flex flex-col p-4">
      {res.map((plan) => (
        <div
          id="plan"
          key={Math.random()}
          className="border w-min m-auto rounded mb-10 grid"
        >
          {render()}
          {plan.map((course) => {
            return course.days.map((day, index) => (
              <div
                className={`day${day} timeStart${
                  course.time[index].start * 10
                } interval${
                  (course.time[index].end - course.time[index].start) * 10
                } bg-red-100 m-0.5 text-[10px] flex flex-col justify-evenly rounded-md items-center text-center overflow-hidden`}
              >
                <p>{course.name}</p>
                <p>{course.professor}</p>
              </div>
            ));
          })}
        </div>
      ))}
    </section>
  );
};

export default Show;

/**/
