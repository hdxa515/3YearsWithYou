

import { useState } from 'react'
import './App.css'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';

function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [bgColor, setBgColor] = useState('bg-zinc-400');
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && password) {
      console.log('Name:', name);
      console.log('Password:', password);

      if (name === "Bassi" && password === "917") {
        setName('');
        setPassword('');
        navigate('/memories'); 
      } 
      else if (name === "Bassa" && password === "315") {
        setName('');
        setPassword('');
        navigate('/3YearsWithYou/memories'); 
      } 
      else {
        setBgColor('bg-gradient-to-r from-red-400 via-red-600 to-pink-500 ');
        setErrorMessage('You are not my Bassi😡 ');
        setName('');
        setPassword('');
      }
    } else {
      alert('Please enter both name and password');
    }
  };

  return (
    <>
      <div className={`font-playwrite flex flex-col min-h-screen ${bgColor}   py-24`}>

      <div>
        {
          !errorMessage?(
            <div className='text-5xl text-white flex justify-center my-16 '>
            3 Years With You
            </div>
          ):(
            <div className="text-red-900 text-4xl p-12 font-bold flex justify-center my-16 ">
              {errorMessage}
            </div>
          )
          }
      </div>

        <div id='input-container' className="flex flex-col justify-center items-center space-y-4 border-2 border-black py-10 rounded-3xl bg-zinc-300 w-96 mx-auto">

          <div className="text-zinc-800 text-2xl">
            Enter to memories
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center space-y-4">
            <div>
            <Input 
              type="text" 
              placeholder="Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              class="bg-zinc-500 p-2 rounded-xl text-white" 
              />
          </div>

          <div>
            <Input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              class="bg-zinc-500 p-2 rounded-xl text-white"
              />
          </div>
            <div>
              <Button variant="secondary" type="submit">Enter</Button>
            </div>
          </form>
        </div>



        
      </div>
    </>
  )
}

export default App
