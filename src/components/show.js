import { BallTriangle } from "react-loader-spinner";

const Show = ({ res, firstLoad }) => {
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
      <div className="border text-left text-xs md:text-sm relative">
        <span className="absolute -top-4 md:-top-5 translate-x-1/2">
          {+7.5}
        </span>
      </div>,
    ];
    for (let i = 1; i < 8; i++) {
      time.push(
        <div className="border col-span-3 text-left text-xs md:text-sm relative">
          <span className="absolute -top-4 md:-top-5 translate-x-1/2">
            {i * 1.5 + 7.5}
          </span>
        </div>
      );
    }

    for (let i = 0; i < 126; i++) {
      time.push(
        <div
          className={`border-y border-y-[#f9f9f9]  text-left relative ${
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
          <p className="text-center text-xs  min-[410px]:text-[14px] md:text-base">
            {days[i]}
          </p>
        </div>
      );
    }

    return time;
  };

  return (
    <section className="lg:flex relative min-h-[100px] border flex-grow rounded flex-col p-4">
      <p
        className={`left-0 absolute top-10 text-center text-[10px] md:text-sm w-full ${
          firstLoad && !res.pending ? "" : "invisible"
        }`}
      >
        دروس و اساتید مورد نظر را انتخاب کنید تا تمامی برنامه های بدون تداخل را
        ببینید
      </p>
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
        <>
          {res.data.length ? (
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
                            (course.time[index].end -
                              course.time[index].start) *
                            10
                          } bg-rose-100 shadow-md text-[6px] min-[410px]:text-[6.5px] min-[500px]:text-[7px] min-[600px]:text-[8px] md:text-[8px] lg:text-[10px] flex flex-col justify-evenly  items-center text-center overflow-hidden`}
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
          ) : (
            <p
              className={`text-center text-sm mb-8 ${
                firstLoad ? "hidden" : ""
              }`}
            >
              هیچ برنامه بدون تداخلی برای دروس و اساتید انتخابی یافت نشد
            </p>
          )}
        </>
      )}
      <p className="absolute left-0 opacity-30 text-[8px] -bottom-4">
        AUG 2023 Ali Kouchakzade
      </p>
    </section>
  );
};

export default Show;
