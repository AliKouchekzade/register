import { BallTriangle } from "react-loader-spinner";

const Show = ({ res }) => {
  const number = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  const render = () => {
    const days = [
      "شنبه",
      "یک شنبه",
      "دو شنبه",
      "سه شنبه",
      "چهارشنبه",
      "پنجشنبه",
    ];

    let time = [
      <div className="border text-left text-sm relative">
        <span className="absolute -top-5 translate-x-1/2">{+7.5}</span>
      </div>,
    ];
    for (let i = 1; i < 8; i++) {
      time.push(
        <div className="border col-span-3 text-left text-sm relative">
          <span className="absolute -top-5 translate-x-1/2">
            {i * 1.5 + 7.5}
          </span>
        </div>
      );
    }

    for (let i = 0; i < 126; i++) {
      time.push(
        <div
          className={`border-y border-y-[#f9f9f9]  text-left text-sm relative ${
            i % 3 === 0
              ? " border-r border-x-[#CBCBCB]"
              : "border-r border-x-[#f9f9f9]"
          }`}
        ></div>
      );
    }

    for (let i = 0; i < 7; i++) {
      time.push(
        <div
          className={`border col-start-1 flex justify-center items-center day${i}`}
        >
          <p className="text-center">{days[i]}</p>
        </div>
      );
    }

    return time;
  };

  return (
    <section className="hidden lg:flex lg:min-h-[400px] border flex-grow rounded flex-col p-4">
      {res.pending ? (
        <div
          className="flex justify-center items-center coursesDiv"
          id="coursesDiv"
        >
          <BallTriangle
            height={50}
            width={50}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </div>
      ) : (
        <div>
          <p className={`text-center text-sm mb-8`}>
            {res.data.length} برنامه وجود دارد
          </p>
          {res.data.map((plan) => (
            <div
              id="plan"
              key={Math.random()}
              className="border w-min m-auto rounded mb-14 grid"
            >
              {render()}
              {plan.map((course) => {
                return course.days.map((day, index) => {
                  return (
                    <div
                      className={`day${day} timeStart${
                        course.time[index].start * 10
                      } interval${
                        (course.time[index].end - course.time[index].start) * 10
                      } bg-rose-100 shadow-md text-[10px] flex flex-col justify-evenly  items-center text-center overflow-hidden`}
                    >
                      <p>
                        {course.name}-{number[course.GNo]}
                      </p>
                      <p>{course.professor}</p>
                    </div>
                  );
                });
              })}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Show;
