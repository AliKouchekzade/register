import { useState } from "react";
import Courses from "./components/courses";
import { printCombination } from "./utils/plan";

function App() {
  const [res, setRes] = useState([]);

  const filterHandler = (selectedCourse, r) => {
    setRes(printCombination(selectedCourse, r));
  };

  return (
    <main className="flex gap-x-8 p-10 relative container">
      <Courses filterHandler={filterHandler} />
      <Show res={res} />
    </main>
  );
}

export default App;

const Show = ({ res }) => {
  return (
    <section className="h-[7000px] border flex-grow rounded">
      {res.map((plan) => (
        <div key={Math.random()} className="border">
          {plan.map((course) => (
            <p key={course.ID}>{course.professor}</p>
          ))}
        </div>
      ))}
    </section>
  );
};
