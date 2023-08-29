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
    <main className="flex gap-x-8 p-10 container m-auto">
      <Courses filterHandler={filterHandler} />
      <Show res={res} />
      <div className="absolute top-0 left-0 w-full h-screen lg:hidden gap-y-3 flex flex-col justify-center items-center">
        <p className="text-2xl">ورژن موبایل فعلا آماده نیست!</p>
        <p className="text-2xl">یک دنیا معذرت</p>
      </div>
    </main>
  );
}

export default App;
