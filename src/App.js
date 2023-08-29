import { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import { select } from "./utils/select";
import { AiOutlineLeft, AiOutlineDown } from "react-icons/ai";

function App() {
  const [selectState, setSelct] = useState([]);

  useEffect(() => {
    setSelct(select());
  }, []);

  return (
    <div
      dir="ltr"
      className="w-[350px] p-2 mb-10 mr-5 max-h-screen overflow-y-auto border rounded border-[#CBCBCB]"
    >
      <h1 className="text-right text-2xl py-2">دروس ارائه شده</h1>
      {selectState.map((course) => (
        <Collapsible
          transitionTime={400}
          trigger={<Trigger name={course.name} open={false} />}
          triggerWhenOpen={<Trigger name={course.name} open={true} />}
          easing={"cubic-bezier(0.175, 0.85, 0.32, 1.5)"}
        >
          <div dir="rtl" className="pt-4">
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
  );
}

export default App;

const Trigger = ({ name, open }) => {
  return (
    <p className="text-right flex justify-between items-center">
      {!open ? <AiOutlineLeft /> : <AiOutlineDown />}
      <span>{name}</span>
    </p>
  );
};
