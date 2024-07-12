import { useState } from 'react'


function App() {
  const [color,setColor] = useState("orange")
      
  return (
    <>
    <div className=" w-full h-screen duration-200 grid grid-cols- place-items-center" style={{backgroundColor:color}}>

    <div className=" bg-white rounded-full w-96  h-96 px-4 shadow-black   ">
      <button onClick={()=> setColor("red")} className="rounded bg-red-700 py-4 px-16 ml-20 mt-28 text-white"> red</button>
      <button onClick={()=> setColor("pink")} className="rounded bg-pink-900 py-4 px-16 ml-20 mt-2 text-white"> pink</button>
      <button  onClick={()=> setColor("blue")} className="rounded bg-blue-700 py-4 px-16 ml-20 mt-2 text-white"> blue</button>
     
    </div>
      




    </div>
    
    
    </>
  )
}

export default App
