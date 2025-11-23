import { useState } from 'react'


function App() {
  
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState('')

  return (
    <>
      <h1 className='text-4xl text-center font-bold text-white mt-6 '>Password Generator </h1>
    </>
  )
}

export default App
