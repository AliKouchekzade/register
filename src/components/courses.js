import { useEffect, useState } from "react";
import { showCourses } from "../utils/showCourses";
import { AiOutlineDown, AiOutlineLeft } from "react-icons/ai";
import Collapsible from "react-collapsible";
import { BallTriangle } from "react-loader-spinner";

const Courses = ({ filterHandler }) => {
  const [courses, setCourses] = useState({ pending: true, data: [] });

  const [selectedCourse, setSelectedCourse] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    async function getCourse() {
      const response = await showCourses();
      setCourses({ pending: false, data: response });
    }
    getCourse();
  }, []);

  return (
    <section
      dir="ltr"
      className={`courses hidden lg:block sticky top-10 basis-1/3  border rounded border-[#CBCBCB] p-4 text-[#353535]`}
    >
      <div className="flex justify-between">
        <form>
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            dir="rtl"
            placeholder="جستجو..."
            style={{ border: "1px solid #CBCBCB" }}
            className="rounded flex-grow w-40 outline-1 outline-[#CBCBCB] p-1"
          />
        </form>
        <h1 className="text-right text-xl mb-3 basis-52">
          دروس ارائه شده<span className="text-[8px]"> (مهندسی برق)</span>
        </h1>
      </div>
      {courses.pending ? (
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
        <div id="coursesDiv" className="overflow-y-auto pr-1">
          {courses.data
            .filter((c) => (searchInput ? c.name.includes(searchInput) : c))
            .map((course) => (
              <Collapsible
                key={course.No}
                transitionTime={400}
                trigger={
                  <Trigger
                    name={course.name}
                    open={false}
                    checked={selectedCourse.filter((s) => s.No === course.No)}
                  />
                }
                triggerWhenOpen={
                  <Trigger
                    name={course.name}
                    open={true}
                    checked={selectedCourse.filter((s) => s.No === course.No)}
                  />
                }
                easing={"cubic-bezier(0.175, 0.85, 0.32, 1.5)"}
              >
                <div dir="rtl">
                  {course.lists.map((list, index) => (
                    <div key={list.ID} className="flex gap-x-3 items-center">
                      <input
                        checked={selectedCourse.includes(list)}
                        onChange={() => {
                          selectedCourse.includes(list)
                            ? setSelectedCourse(
                                selectedCourse.filter(
                                  (sel) => sel.ID !== list.ID
                                )
                              )
                            : setSelectedCourse([...selectedCourse, list]);

                          console.log(selectedCourse);
                        }}
                        className="w-4 h-4"
                        type="checkbox"
                        id={list.ID}
                      />
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
      )}

      <button
        onClick={() =>
          filterHandler(
            selectedCourse,
            selectedCourse
              .map((c) => c.No)
              .filter((val, index, array) => array.indexOf(val) === index)
              .length
          )
        }
        className="mt-3 bg-cyan-500 w-full rounded py-1.5 text-white"
      >
        فیلتر
      </button>
    </section>
  );
};

export default Courses;

const Trigger = ({ name, open, checked }) => {
  return (
    <div>
      <p className="text-right flex justify-between items-center">
        {!open ? <AiOutlineLeft /> : <AiOutlineDown />}
        <div className="flex gap-x-2 items-center">
          {checked.length ? (
            <span className="w-2 h-2 rounded-full bg-cyan-200"></span>
          ) : (
            ""
          )}
          <span>{name}</span>
        </div>
      </p>
      <div className="text-xs text-right pr-2 text-[#717171]">
        {!open ? checked.map((c) => <p className="mt-1">{c.professor}</p>) : ""}
      </div>
    </div>
  );
};
