import Courses from "./components/courses";
import { printCombination } from "./utils/plan";

function App() {
  const filterHandler = (selectedCourse,r) => {
    console.log(printCombination(selectedCourse,r));
  };

  return (
    <main className="flex gap-x-8 p-10 relative container">
      <Courses filterHandler={filterHandler} />
      <section className="h-[7000px] border flex-grow rounded">1</section>
    </main>
  );
}

export default App;
