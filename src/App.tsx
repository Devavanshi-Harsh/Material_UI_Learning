import { useState } from 'react'
import './App.css'
import { MuiTypography } from './components/MuiTypography'

function App() {
  const [showTypography, setshowTypography] = useState(false)

  return (
    <div className='App'>
      <button onClick={() => setshowTypography(!showTypography)}>
        Typography
      </button>
      {showTypography ? <MuiTypography /> : null}
    </div>
  )
}

export default App
