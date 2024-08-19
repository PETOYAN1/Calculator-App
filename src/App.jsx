import { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/images/logo.png';
import rocket from './assets/images/rocket.png';
import calculator from './assets/images/calculator.png';
import dark from './assets/images/dark.png';
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';

function App() {
  const [result, setResult] = useState('');
  
  const buttons = [
    '.', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', '00', 0,
  ];

  // Action Buttons

  const handleClick = (e) => {
    setResult((prev) => prev.concat(e.target.value));
  }
  const clearAll = () => setResult('');
  const deleteOne = () => {
    if(result === 'error') {
      setResult('');
    } else if (result !== 0) {
      setResult(result.slice(0, -1));
    }
  }
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult('error');
    }

  }
  
  // Dark Mode 

  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    if(theme === 'dark') {
        root.classList.add("dark");
        root.classList.remove("light");
    } else {
        root.classList.add("light");
        root.classList.remove("dark");
    }
    localStorage.setItem('theme', theme);
}, [theme,colorTheme]);

    const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <>
    <img className='absolute w-[374px] h-[812px] left-[-5em] top-[-40rem]' src={calculator} alt="calculator" />
    <img className='absolute w-[374px] h-[812px] right-[-9em] top-[35em]' src={dark} alt="dark" />
    <div className="article flex flex-col items-start">
        <span className='x6'>6</span>
        <span className='box ml-[12.4em]'></span>
        <img className='my-8' src={logo} alt="logo" /><br/>
        <span className='bg-[#2CA8FF] hover:bg-blue-500 rounded-2xl font-bold w-40 text-white px-3 py-2 inline-block mx-0'>DESIGN Tailwind</span><br/>
        <span className='text-start text-4xl w-full block font-bold text-gray-800'>
          Tailwind:Calculator <br/> App User Interface<br/>Design.
        <img className='w-10 h-10 inline' src={rocket} alt="rocket" />
        </span><br/>
        <span className='x9'>9</span>
        <span className='box2'></span>
    </div>
    <div className="container h-[600px] w-[600px] flex flex-col items-center gap-10 px-3 py-10">
        <div className='calculator flex gap-8 flex-col justify-end z-10 px-4 py-4 max-w-[20em] h-full rounded-[40px]'>
          {
              theme === 'light'?
              <MoonIcon onClick={toggleTheme} className='darkMode'/>
              :
              <SunIcon onClick={toggleTheme} className='darkMode'/>
          }
          <input placeholder='0' className='bg-transparent rounded-md my-9 p-4 h-10 w-full text-5xl font-semibold text-[#303136] text-right tracking-wider shadow-current' type="text" value={result} disabled/>
        <div className='grid grid-cols-4 gap-2'>
          <button onClick={clearAll} className='operator' type="button">AC</button>
          <button onClick={deleteOne} className='operator' type="button">DEL</button>
          { buttons.map((element, index) => {
            if(+element >= 0) {
              return <button key={index} onClick={handleClick} className='numbers' type="button" value={element}>{element}</button>
            }
              return <button key={index} onClick={handleClick} className='operator' type="button" value={element}>{element}</button>
            })
          }
          <button onClick={calculate} className='operator col-span-2' type="button" value='='>=</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default App;
