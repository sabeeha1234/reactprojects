import { useCallback, useState ,useEffect,useRef } from 'react'

import './App.css'

function App() {
 const [length,setLength]=useState(8)
 const [numberAllowed,setNumberAllowed]=useState(false)
 const [charAllowed,setCharAllowed]=useState(false)
 const [password,setPassword]=useState('')

 const passwordRef =useRef(null)


 const passGenerator=useCallback(()=>{
  let pass =''
  let str='QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm'
  if(numberAllowed) str +="1234567890"
  if(charAllowed) str +='!@#$%^&*_'

  for (let i = 1;i <=length; i++ ){
 let char=Math.floor(Math.random()* str.length +1)
 pass +=str.charAt(char)

  }


  setPassword (pass)
},[length,numberAllowed,charAllowed,setPassword])

const copyPasswordToClipboard=useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current.setSelectionRange(0,999);
  window.navigator.clipboard.writeText(password)


},[password])


useEffect(()=>{
  passGenerator()

},[length,numberAllowed,charAllowed,passGenerator])




  return (
    <>
      
       <div className=' bg-purple-700 h-52 w-9/12  ml-44  rounded-xl'>
       <h1 className='text-3xl text-white ml-64'>password generator</h1>
       <div>
        <input type="text" className='w-8/12 h-10 rounded-l-xl mt-10 ml-36 outline-none ' value={password} readOnly ref={passwordRef} /><button className='px-3 py-2 bg-orange-500 rounded-r-xl' onClick={copyPasswordToClipboard}>copy</button>
        <div>
        <input type="range" className='mt-4 ml-36' min={8} max={100} value={length} onChange={(e)=> {setLength (e.target.value)}}  /><label className='text-orange-500 ' >length:{length}</label>
        </div>
        <div>
          <input  className='ml-96 ' type="checkbox" defaultChecked={numberAllowed} onChange={()=> {setNumberAllowed ((prev) => !prev);}} /><label className='ml-18 text-orange-500'>numbers</label>
        </div>
        
        <div className="mb-11">
          <input type="checkbox" className='ml-96  'defaultChecked={charAllowed} onChange={()=>{setCharAllowed ((prev) => !prev);}} /><label  className='text-orange-500 ' htmlFor='characterInput'>characters</label>
        </div>
       </div>


         
       </div>


      
    </>
  )
}

export default App
