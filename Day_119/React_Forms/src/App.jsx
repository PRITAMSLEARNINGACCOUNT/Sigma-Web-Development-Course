import { useState } from 'react'
import './App.css'
import Login_Form from './Components/Login_Form'
import Navbar from './Components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container">
        <Login_Form />

      </div>
    </>
  )
}

export default App
