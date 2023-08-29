import Courses from "./components/courses";

function App() {
  return (
    <main className="flex gap-x-2 p-10 relative">
      <Courses />
      <section className="h-[7000px] border flex-grow rounded">1</section>
    </main>
  );
}

export default App;
