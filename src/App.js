import { useState } from "react";
import Courses from "./components/courses";
import { printCombination } from "./utils/plan";
import Show from "./components/show";

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
