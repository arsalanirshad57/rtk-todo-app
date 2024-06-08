import { useEffect, useState } from 'react';
import AddToDo from './Components/AddToDo';
import BgImage from './Components/BgImage';
import NavBar from './Components/NavBar';
import Tasks from './Components/Task';
import { ThemeProvider, useThemeSwither } from './context/ThemeSwither';
import './App.css';

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
     setThemeMode('light')
  }
  const darkTheme = () => {
     setThemeMode('dark')
  }
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="relative flex h-screen dark:text-white text-gray-600 dark:bg-black bg-white">
        <BgImage />
        <div className=' flex flex-col gap-8 w-11/12 sm:w-10/12 md:w-600 h-96 border-black z-50 mt-36 mx-auto '>
          <NavBar />
          <div className='flex flex-col gap-5 z-50 '>
            <AddToDo />
            <div className='flex flex-col divide-y dark:divide-gray-500 divide-gray-300 dark:bg-slate-800  bg-white rounded-sm py-2 dark:shadow-none shadow-md'>
              <Tasks />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
} 

export default App;
