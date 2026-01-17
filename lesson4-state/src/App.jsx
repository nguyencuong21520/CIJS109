import { useState } from "react"
import ShowCount from "./components/ShowCount"
import ChangeCount from "./components/ChangeCount"
import "./App.css"
const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Show Count App</h1>
      <div className="show-count-container">
        <ShowCount count={count} />
      </div>
      <div className="change-count-container">
        <ChangeCount setCountFn={setCount} />
      </div>


    </div>
  )
}

export default App