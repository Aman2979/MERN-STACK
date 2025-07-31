import './App.css'

function App() {

  const student = ["Aman Raj", "Atul Chaudhary", "Sumit Chauhan", "Priyanshu Chauhan", "Nitin Kumar"]

  return (
    <>
    <ol type='1'>
      {student.map((std, ind) => {
        return <li key={ind}>{std}</li>
      })}
    </ol>
      <h1>Hyy React</h1>
    </>
  )
}

export default App
