import { useState } from "react";
import Courses from "./components/courses";
import { getplans } from "./utils/plan";
import Show from "./components/show";

function App() {
  const [res, setRes] = useState({ pending: false, data: [] });

  const filterHandler = (selectedCourse, r) => {
    setRes({ pending: true, data: [] });
    async function get() {
      const response = await getplans(selectedCourse, r);
      console.log(response);
      setRes({ pending: false, data: response });
    }
    get();
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
