'use client'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormToggle from './Component/FormToggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App flex items-center justify-center h-screen bg-gradient-to-r from-gray-300 to-blue-200">
      <FormToggle/>

    </div>
    </>
  )
}

export default App
