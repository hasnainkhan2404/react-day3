import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <div className='border-4 border-brown p-8 rounded-lg'>
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-2xl font-bold text-fuchsia-950 mb-8'>Counter App</h1>
      <h2 className='text-4xl font-bold text-fuchsia-950 mb-8'>{count}</h2>
      <div className='flex gap-8'>
        <button className='border p-2 border-black' onClick={()=>setCount(count+1)}>Increment</button>
        <button className='border p-2 border-black' onClick={()=>setCount(count-1)}>Decrement</button>
        <button className='border p-2 border-black' onClick={()=>setCount(0)}>Reset</button>
      </div>
    </div>
   </div>
   </>
  )
}

export default App
