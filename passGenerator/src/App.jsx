import { useState, useCallback } from 'react'

function App() {
  
  // States - length, numberAllowed, characterAllowed, password
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState('');

  // Function to generate password
  const passwordGenerator = useCallback(() =>{
    let pass = '';
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const characters = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    if(numberAllowed) letters += numbers;
    if(characterAllowed) letters += characters;

    for(let i = 0; i <length; i++){
      let char = Math.floor(Math.random() * letters.length + 1);
      pass += letters.charAt(char);
    }

    setPassword(pass);
  },[length,numberAllowed,characterAllowed, setPassword])


  return (
    <>
      <h1 className='text-4xl text-center font-bold text-white mt-6 '>Password Generator </h1>
    </>
  )
}

export default App
