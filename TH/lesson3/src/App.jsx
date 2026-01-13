

import './App.css'
import Card from './components/Card'
function App() {

  //Todo
  // - using map to render the list of cards
  // - show total students
  return (
    <>  
    <h1 className="total-students">Total students: 3</h1>
      <Card name="Nguyễn Văn A" classInfo="CIJS108" description="I am a software engineer" />
      <Card name="Trần Thị B" classInfo="CIJS109" description="I am a teacher" />
      <Card name="Lê Văn C" classInfo="CIJS110" description="I am a student" />
    </>
  )
}

export default App
