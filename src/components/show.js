import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { data } from "../data/data";

const Show = ({ res, firstLoad }) => {
  const number = [
    "۰",
    "۱",
    "۲",
    "۳",
    "۴",
    "۵",
    "۶",
    "۷",
    "۸",
    "۹",
    "۱۰",
    "۱۱",
    "۱۲",
    "۱۳",
    "۱۴",
    "۱۵",
    "۱۶",
    "۱۷",
    "۱۸",
    "۱۹",
    "۲۰",
    "۲۱",
    "۲۲",
    "۲۳",
    "۲۴",
    "۲۵",
    "۲۶",
    "۲۷",
    "۲۸",
    "۲۹",
  ];

  const [maarefShow, setMaarefShow] = useState([]);

  useEffect(() => {
    const x = new Array(res.data.course.length);
    x.fill("");
    setMaarefShow(x);
  }, [res]);

  function getCourseByID(id) {
    return data.find((d) => d.ID === id);
  }

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

    for (let i = 0; i < 132; i++) {
      time.push(
        <div
          className={`border-y z-10 border-y-[#f9f9f9]  text-left relative border-x-[#f9f9f9] timeStart${
            (i % 22) * 5 + 75
          } day${Math.floor(i / 22)}`}
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

  function maarefShowFunc(index) {
    const c = getCourseByID(Number(maarefShow[index]));
    return (
      <div
        className={`z-20 day${c.days[0]} timeStart${
          c.time[0].start * 10
        } interval${
          (c.time[0].end - c.time[0].start) * 10
        } bg-cyan-100 shadow-md text-[5.5px] min-[410px]:text-[6px] min-[500px]:text-[6.5px] min-[600px]:text-[7px] md:text-[8px] lg:text-[10px] flex flex-col justify-evenly  items-center text-center overflow-hidden`}
      >
        <p>
          {c.name}-{number[c.GNo]}
        </p>
        <p>{c.professor}</p>
      </div>
    );
  }

  return (
    <section className="lg:flex relative min-h-[160px] border flex-grow rounded flex-col p-4">
      <div
        className={`left-0 absolute top-10 text-center text-[10px] md:text-sm w-full ${
          firstLoad && !res.pending ? "" : "invisible"
        }`}
      >
        <p>
          دروس و اساتید مورد نظر را انتخاب کنید تا تمامی برنامه های بدون تداخل
          را ببینید
        </p>
        <p className="w-5/6 mt-5 m-auto">
          برای دروس معارف برنامه جدید نمایش داده نمیشود. با انتخاب دروس معارف
          برای برنامه های قبلی تمامی معارف های بدون تداخل از بین معارف های
          انتخابی نمایش داده میشود
        </p>
      </div>
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
          {res.data.course.length ? (
            <div>
              <p className={`text-center text-sm mb-8`}>
                {res.data.course.length} برنامه وجود دارد
              </p>
              {res.data.course.map((plan, index) => (
                <div className="mb-16">
                  <div
                    id="plan"
                    key={Math.random()}
                    className="border w-min m-auto rounded grid"
                  >
                    {render()}
                    {plan.map((course) => {
                      return course.days.map((day, index) => {
                        return (
                          <div
                            className={`z-20 day${day} timeStart${
                              course.time[index].start * 10
                            } interval${
                              (course.time[index].end -
                                course.time[index].start) *
                              10
                            } bg-rose-100 shadow-md text-[5.5px] min-[410px]:text-[6px] min-[500px]:text-[6.5px] min-[600px]:text-[7px] md:text-[8px] lg:text-[10px] flex flex-col justify-evenly  items-center text-center overflow-hidden`}
                          >
                            <p>
                              {course.name}-{number[course.GNo]}
                            </p>
                            <p>{course.professor}</p>
                          </div>
                        );
                      });
                    })}
                    {maarefShow[index] ? maarefShowFunc(index) : ""}
                  </div>
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-y-2.5">
                    {res.data.maaref[index].map((ma) => (
                      <div className="flex gap-x-1 items-center">
                        <input
                          value={ma.ID}
                          name={index}
                          id={ma.ID / (index + 2)}
                          type="radio"
                          onChange={(e) => {
                            const copy = [...maarefShow];
                            copy[index] = e.target.value;
                            setMaarefShow(copy);
                          }}
                        />
                        <label
                          htmlFor={ma.ID / (index + 2)}
                          className="text-[10px]"
                        >
                          {ma.name}
                          {"-"}
                          {number[ma.GNo]}
                          {"-"}
                          {ma.professor}
                          {ma.days2}
                        </label>
                      </div>
                    ))}
                  </div>
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
      <p className="absolute left-0 opacity-0 text-[8px] -bottom-4">
        AUG 2023 Ali Kouchakzade
      </p>
    </section>
  );
};

export default Show;
