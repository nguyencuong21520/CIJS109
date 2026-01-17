import { useState } from "react";
import "./App.css";
const App = () => {
  const [isOn, setIsOn] = useState(false)

  const toggleSwitch = () => {
    // if (isOn === false) {
    //   setIsOn(true)
    // } else {
    //   setIsOn(false)
    // }
    setIsOn(!isOn)
  }


  return (
    <div>
      <h2>Light Toggle</h2>
      <button onClick={toggleSwitch}>{isOn ? "On" : "Off"}</button>
      <div style={{
        backgroundColor: isOn ? "yellow" : "black"
      }} className="light-bulb"></div>
    </div>
  )
}

export default App;