import List from "./components/List";

function App() {
  const studentName = [
    "Aman",
    "Kumar",
    "Atul",
    "Raj",
    "Singh",
    "Harsh",
    "Jatin",
    "Priya",
    "Nitin",
  ];
  return (
    <>
      <h1 className="m-2 bg-amber-300 border-2 p-2 rounded">Learning Map</h1>
      <List list={studentName}/>
    </>
  );
}

export default App;
