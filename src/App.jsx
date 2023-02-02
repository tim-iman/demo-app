import { useState } from 'react'
import './App.css'
import News from "./components/News";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hacker News</h1>
      <News />
    </div>
  )
}

export default App