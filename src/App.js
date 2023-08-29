import { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import { select } from "./utils/select";

function App() {
  const [selectState, setSelct] = useState([]);

  useEffect(() => {
    setSelct(select());
  }, []);

  return (
    <div className="w-[500px] p-20">
      {selectState.map((course) => (
        <Collapsible
          transitionTime={400}
          trigger={course.name}
          easing={"cubic-bezier(0.175, 0.85, 0.32, 1.5)"}
        >
          <div>
            {course.lists.map((list) => (
              <div>
                <input type="checkbox" id={list.ID} />
                <label htmlFor={list.ID}>{list.professor}</label>
              </div>
            ))}
          </div>
        </Collapsible>
      ))}
    </div>
  );
}

export default App;
