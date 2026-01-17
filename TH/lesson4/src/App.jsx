import UserInfoForm from "./components/UserInfoForm"
import ShowUserInfo from "./components/ShowUserInfo"
import { useState } from "react"
const App = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div>
      <h1>Exercise 1</h1>
      <UserInfoForm name={name} email={email} handleNameChange={handleNameChange} handleEmailChange={handleEmailChange} handleSubmit={handleSubmit} />
      {isSubmitted && <ShowUserInfo name={name} email={email} />}
    </div>
  )
}

export default App