import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='underline md:text-2xl text-amber-900 font-bold '>Hello World</h1>
    </>
  )
}

export default App
