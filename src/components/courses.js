import { useEffect, useState } from "react";
import { select } from "../utils/select";
import { AiOutlineDown, AiOutlineLeft } from "react-icons/ai";
import Collapsible from "react-collapsible";

const Courses = () => {
  const [selectState, setSelct] = useState([]);

  useEffect(() => {
    setSelct(select());
  }, []);

  return (
    <section
      dir="ltr"
      id="courses"
      className={`sticky top-10 basis-1/3  border rounded border-[#CBCBCB] p-4 text-[#353535]`}
    >
      <h1 className="text-right text-2xl mb-3">
        دروس ارائه شده<span className="text-xs"> (مهندسی برق)</span>
      </h1>
      <div id="coursesDiv" className="overflow-y-auto">
        {selectState.map((course) => (
          <Collapsible
            transitionTime={400}
            trigger={<Trigger name={course.name} open={false} />}
            triggerWhenOpen={<Trigger name={course.name} open={true} />}
            easing={"cubic-bezier(0.175, 0.85, 0.32, 1.5)"}
          >
            <div dir="rtl">
              {course.lists.map((list, index) => (
                <div className="flex gap-x-3 items-center">
                  <input className="w-4 h-4" type="checkbox" id={list.ID} />
                  <label
                    className={` ${
                      index ? "border-t" : ""
                    } border-[#CBCBCB] py-3 flex-grow text-sm`}
                    htmlFor={list.ID}
                  >
                    {list.professor}
                  </label>
                </div>
              ))}
            </div>
          </Collapsible>
        ))}
      </div>
      <button className="mt-3 bg-red-500 w-full rounded py-1.5 text-white">فیلتر</button>
    </section>
  );
};

export default Courses;

const Trigger = ({ name, open }) => {
  return (
    <p className="text-right flex justify-between items-center">
      {!open ? <AiOutlineLeft /> : <AiOutlineDown />}
      <span>{name}</span>
    </p>
  );
};
