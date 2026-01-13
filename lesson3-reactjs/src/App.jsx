import './App.css'
import InputSearch from "./components/InputSearch"
import StudentCard from "./components/StudentCard"

function App() {
  const students = [
    {id: 1, studentName: "Nguyen Van A", grade: "A", age: 20},
    {id: 2, studentName: "Tran Thi B", grade: "B", age: 21},
    {id: 3, studentName: "Le Van C", grade: "C", age: 22},
    {id: 4, studentName: "Pham Thi D", grade: "D", age: 23},
    {id: 5, studentName: "Nguyen Van E", grade: "E", age: 24},
    {id: 6, studentName: "Nguyen Van F", grade: "F", age: 25},
    {id: 7, studentName: "Nguyen Van G", grade: "G", age: 26},
    {id: 8, studentName: "Nguyen Van H", grade: "H", age: 27},
    {id: 9, studentName: "Nguyen Van I", grade: "I", age: 28},
    {id: 10, studentName: "Nguyen Van J", grade: "J", age: 29},
  ]
  return (
    <>
      <h1 className="title_custom">Student List</h1> 
      {/* search input */}
      <InputSearch />
      {/* student list */}
      <div className="student-list-container">
        {
          students.map((studentItem, index)=>{
            return <StudentCard key={studentItem.id + index } id={studentItem.id} studentName={studentItem.studentName} grade={studentItem.grade} age={studentItem.age} />
          })
        }
      </div>
    </>
  )
}

export default App




