import { useState, useEffect } from 'react';

const App = () => {
  // const [data, setData] = useState([])
  const fetchData = async () =>{
    const response = await fetch("https://mindx-mockup-server.vercel.app/api/resources/users?apiKey=67fe6ce4c590d6933cc126d9")
    const data = await response.json()
    console.log("🚀 ~ fetchData ~ data:", data)
    // setData(data.data.data)
  }
  // fetchData()

  return(
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  )

}

export default App;
