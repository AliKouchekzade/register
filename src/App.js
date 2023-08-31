import { useState } from "react";
import Courses from "./components/courses";
import { getplans } from "./utils/plan";
import Show from "./components/show";

function App() {
  const [res, setRes] = useState({ pending: false, data: [] });
  const [firstLoad, setFirstLoad] = useState(true);

  const filterHandler = (selectedCourse, r) => {
    if (selectedCourse.length) setFirstLoad(false);
    else setFirstLoad(true);
    setRes({ pending: true, data: [] });
    async function get() {
      const response = await getplans(selectedCourse, r);
      setRes({ pending: false, data: response });
    }
    get();
  };

  return (
    <main className="flex flex-col md:flex-row gap-8 p-4 lg:p-10 cnt m-auto">
      <Courses filterHandler={filterHandler} />
      <Show firstLoad={firstLoad} res={res} />
    </main>
  );
}

export default App;
