import { useEffect, useState, useTransition } from "react";
import { showCourses } from "../utils/showCourses";
import { AiOutlineDown, AiOutlineLeft } from "react-icons/ai";
import Collapsible from "react-collapsible";
import { BallTriangle } from "react-loader-spinner";
import { data } from "../data/data";
import Select from "react-select";

const Courses = ({ filterHandler }) => {
  const options = [
    { value: 20, label: "مهندسی عمران" },
    { value: 21, label: "مهندسی صنایع" },
    { value: 22, label: "علوم ریاضی" },
    { value: 23, label: "شیمی" },
    { value: 24, label: "فیزیک" },
    { value: 25, label: "مهندسی برق" },
    { value: 31, label: "مرکز زبان ها و زبان شناسی" },
    { value: 33, label: "مرکز آموزش مهارت های مهندسی" },
    { value: 37, label: "مرکز معارف اسلامی و علوم انسانی" },
  ];

  const [courses, setCourses] = useState({ pending: true, data: [] });

  const [selectedCourse, setSelectedCourse] = useState([]);
  const [selectedMaaref, setSelectedMaaref] = useState([]);
  const [selectedOption, setSelectedOption] = useState({
    value: 25,
    label: "مهندسی برق",
  });

  const [searchInput, setSearchInput] = useState("");
  const [isPending, startTransition] = useTransition();

  async function getCourse(department) {
    setCourses({ pending: true, data: [] });
    const response = await showCourses(department);
    setCourses({ pending: false, data: response });
  }

  useEffect(() => {
    try {
      localStorage.removeItem("course");
    } catch (error) {}
    try {
      setSelectedCourse(
        JSON.parse(localStorage.getItem("courses") || []).map((id) =>
          getCourseByID(id)
        ) || []
      );
    } catch (error) {}

    try {
      setSelectedMaaref(
        JSON.parse(localStorage.getItem("maaref") || []).map((id) =>
          getCourseByID(id)
        ) || []
      );
    } catch (error) {}
    getCourse();
  }, []);

  function getCourseByID(id) {
    return data.find((d) => d.ID === id);
  }

  return (
    <section
      dir="ltr"
      className={`courses lg:block md:sticky top-10 basis-1/3  border rounded border-[#CBCBCB] p-4 text-[#353535]`}
    >
      <div className="flex items-center gap-x-5 justify-between mb-3">
        <form className="flex-grow">
          <input
            value={searchInput}
            onChange={(e) => {
              startTransition(() => {
                setSearchInput(e.target.value);
              });
            }}
            dir="rtl"
            placeholder="جستجو..."
            style={{ border: "1px solid #CBCBCB" }}
            className="rounded flex-grow w-full text-sm md:text-base outline-1 outline-[#CBCBCB] p-1.5"
          />
        </form>
        <Select
          className="basis-1/2 text-sm  border-[#CBCBCB]"
          isSearchable
          value={selectedOption}
          onChange={(option) => {
            setSelectedOption(option);
            setSearchInput("");
            getCourse(option.value);
          }}
          options={options}
        />
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
                    checked={[
                      ...selectedCourse.filter((s) => s.No === course.No),
                      ...selectedMaaref.filter((s) => s.No === course.No),
                    ]}
                  />
                }
                triggerWhenOpen={
                  <Trigger
                    name={course.name}
                    open={true}
                    checked={[
                      ...selectedCourse.filter((s) => s.No === course.No),
                      ...selectedMaaref.filter((s) => s.No === course.No),
                    ]}
                  />
                }
                easing={"cubic-bezier(0.175, 0.85, 0.32, 1.5)"}
              >
                <div dir="rtl">
                  {course.lists.map((list, index) => (
                    <div
                      key={list.ID}
                      className="flex gap-x-2 md:gap-x-3 items-center"
                    >
                      <input
                        disabled={
                          list.professor.includes("ورودی") || !list.days2
                        }
                        checked={
                          selectedCourse.includes(list) ||
                          selectedMaaref.includes(list)
                        }
                        onChange={() => {
                          if (Math.floor(list.No / 1000) !== 37) {
                            if (selectedCourse.includes(list)) {
                              setSelectedCourse(
                                selectedCourse.filter(
                                  (sel) => sel.ID !== list.ID
                                )
                              );
                              localStorage.setItem(
                                "courses",
                                JSON.stringify(
                                  selectedCourse
                                    .filter((sel) => sel.ID !== list.ID)
                                    .map((c) => c.ID)
                                )
                              );
                            } else {
                              setSelectedCourse([...selectedCourse, list]);
                              localStorage.setItem(
                                "courses",
                                JSON.stringify([
                                  ...selectedCourse.map((c) => c.ID),
                                  list.ID,
                                ])
                              );
                            }
                          } else {
                            if (selectedMaaref.includes(list)) {
                              setSelectedMaaref(
                                selectedMaaref.filter(
                                  (sel) => sel.ID !== list.ID
                                )
                              );
                              localStorage.setItem(
                                "maaref",
                                JSON.stringify(
                                  selectedMaaref
                                    .filter((sel) => sel.ID !== list.ID)
                                    .map((c) => c.ID)
                                )
                              );
                            } else {
                              setSelectedMaaref([...selectedMaaref, list]);
                              localStorage.setItem(
                                "maaref",
                                JSON.stringify([
                                  ...selectedMaaref.map((c) => c.ID),
                                  list.ID,
                                ])
                              );
                            }
                          }
                        }}
                        className="w-4 h-4"
                        type="checkbox"
                        id={list.ID}
                      />
                      <label
                        className={` ${
                          index ? "border-t" : ""
                        } border-[#CBCBCB] py-3 flex-grow text-[10px] md:text-sm flex items-center gap-x-1`}
                        htmlFor={list.ID}
                      >
                        {list.professor}
                        <span className="text-[7px] md:text-[10px]">
                          {" "}
                          ({list.GNo})
                          {"  "}({list.days2})
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </Collapsible>
            ))}
        </div>
      )}

      <button
        onClick={() => filterHandler(selectedCourse, selectedMaaref)}
        className="mt-3 bg-red-500 w-full rounded py-1.5 text-white"
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
      <p className="text-right text-sm lg:text-base flex justify-between items-center">
        {!open ? <AiOutlineLeft /> : <AiOutlineDown />}
        <div className="flex gap-x-2 items-center">
          {checked.length ? (
            <span className="w-2 h-2 rounded-full bg-red-300"></span>
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
