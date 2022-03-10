import { useState } from 'react'
import logo from '/src/logo.svg'
import '/src/public/css/App.css'
import Title from '/src/components/homeComponent';
import Calculator from '/src/components/calculatorComponent';

function App() {
  return (
    <div className = "App">
      <Calculator/>
    </div>
  )
}

export default App
