import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  
  // States - length, numberAllowed, characterAllowed, password
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState('');

  //useRef to copy password from clipboard
  const passwordRef = useRef(null);

  // Function to generate password
  const passwordGenerator = useCallback(() =>{
    let pass = '';
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let characters = "!@#$%^&*()_+~`|}{[]:;?><,./-=;";

    if(numberAllowed) letters += numbers;
    if(characterAllowed) letters += characters;

    for(let i = 0; i <length; i++){
      let char = Math.floor(Math.random() * letters.length + 1);
      pass += letters.charAt(char);
    }

    setPassword(pass);
  },[length,numberAllowed,characterAllowed, setPassword])
  
  // Function to call the password generator 

  useEffect(()=>{
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  // Function to copy password to clipboard
  const copypasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();// highlight the text
    passwordRef.current?.setSelectionRange(0, 21); // For mobile devices
   window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <h1 className='text-4xl text-center font-bold text-white mt-6 '>Password Generator </h1>
      <div className='w-full max-w-md mx-auto rounded-lg bg-gray-700 p-5 my-8 shadow-lg'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
           <input
           type='text'
           value={password}
           readOnly
           className='outline-none w-full py-1 px-3  bg-white text-black'
           placeholder='Password'
           ref={passwordRef}
           />
           <button
            onClick={copypasswordToClipboard}
           className='bg-blue-500 px-4 py-2 text-white'
           >Copy</button>
        </div>
        <div className='flex text-sm gap-x-3'>
          <div className='flex items-center gap-x-1'>
            <input
            type='range'
            min={8}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label className='text-orange-500'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
             <input 
              type='checkbox'
              checked={numberAllowed}
              id='numberAllowed'
              onChange={(e)=>{setNumberAllowed(prev => !prev)}}    
            />
            <label className='text-orange-500'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
             <input 
              type='checkbox'
              checked={characterAllowed}
              id='characterAllowed'
              onChange={(e)=>{setCharacterAllowed(prev => !prev)}}    
            />
            <label className='text-orange-500'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
