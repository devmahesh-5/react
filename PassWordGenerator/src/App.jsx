import { useState,useCallback,useEffect,useRef } from 'react'
function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [Password, setPassword] = useState("");
 
  //useCallback hook for optimization(avoiding re-rendering(if the value for certain dependencies has not changed,the component will not re-render as it was saved in the cache which will be used in future))  
const generatePassword = useCallback(() => {
  let pass = "";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let num="0123456789";
  let char="!@#$%^&*()_+{}";
  numAllow?str+=num:"";
  charAllow?str+=char:"";
for(let i=0;i<length;i++){
  pass+=str.charAt(Math.floor(Math.random()*str.length));
}
  setPassword(pass);
},[numAllow,charAllow,length,setPassword]);
//useRef hook to get access to the element
const passRef=useRef(null);
const copyToClipboard=useCallback(()=>{
  passRef.current.select();
  // passRef.current.setSelectionRange(0, 8);
  window.navigator.clipboard.writeText(Password);
},[Password])
//useEffect hook for optimization(if only dependencies changed,then only component will re-render else this specific component will not be recreated at the time of vdom and real dom comparision)  
useEffect(() => {
  generatePassword();
},[numAllow,charAllow,length,generatePassword])
  return (
  
      <div className='w-full justify-center items-center flex flex-col bg-slate-800 rounded-lg'>
      <h1 className="font-bold text-white text-3xl">Password Generator</h1>
       <div className='flex flex-wrap gap-2 justify-center'>
        <input 
        className='p-2 rounded-lg text-black placeholder:Password' type="text" 
        value={Password}
        readOnly
        ref={passRef}//to get access to the element we create refrence here
        />
       <button className='bg-blue-500 text-white p-2 rounded-lg opacity-80 hover:opacity-100' onClick={copyToClipboard}>Copy</button></div> 
        <div className='flex flex-wrap gap-2 text-white m-auto'><input type="range" id="length" min={6} max={20} value={length} onChange={(e)=>setLength(e.target.value)} className='p-2 rounded-lg cursor-pointer' /> <label htmlFor="length">Length {length}</label>

        <input type="checkbox" id='num' onChange={()=>setNumAllow((prev)=>!prev)}/> <label htmlFor="num"> Number</label>
        <input type="checkbox" id='char' onChange={()=>setCharAllow((prev)=>!prev)} /> <label htmlFor="char"> Character</label>
        </div>
      </div>
  
  )
}

export default App
