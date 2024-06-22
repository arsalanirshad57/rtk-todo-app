import { useEffect, useState } from 'react';

import { ThemeProvider, useThemeSwither } from './context/ThemeSwither';
import { TodoProvider } from './context/TodoContext';

import Icon from './Components/Icons';
import BgImage from './Components/BgImage';
import NavBar from './Components/NavBar';
import Tasks from './Components/Task';
import './App.css';
import AddToDo from './Components/AddToDo';

function App() {
  // Sates and Variables
  const [todos, setTodos] = useState([])
  const [themeMode, setThemeMode] = useState('light')
  // Functions for theme switcher
  console.log(todos, 'todos');

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  // Functions for To Do

  const addTodo = (todo) => {
    setTodos((prevVal) => {
      if (prevVal?.some(itm => itm?.todoTitle == todo?.todoTitle)) {
        return [...prevVal]
      } else {
        return [{
          id: Math.round(Math.random() * 1000),
          ...todo
        }, ...prevVal]
      }
    }

    )
  }

  const onDelete = (id) => {
    setTodos((prevTodo) => {
      if (prevTodo?.some(prev => prev?.id == id)) {
        return prevTodo?.filter(filtPrev => filtPrev?.id !== id)
      }
    })
  }

  const onEdit = (id, todo) => {
    setTodos((prev) => prev?.map(prevItem => prevItem?.id === id ? { ...prevItem, ...todo } : prevItem))
  }

  const toogleComplete = (id, todo) => {
    setTodos((prevItem) => prevItem?.map(item => item?.id === id ? { ...item, ...todo } : item)
    )
  }
  // UseEffects 

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode]);

  useEffect(() => {
    const ParseTodos = JSON.parse(localStorage.getItem('todos'))
    if (ParseTodos && ParseTodos?.length > 0) {
      setTodos(ParseTodos)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);


  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <TodoProvider value={{ todos, onDelete, addTodo, onEdit, toogleComplete }}>
        <div className="relative flex h-screen dark:text-white text-gray-600 dark:bg-black bg-white">
          <BgImage />
          <div className=' flex flex-col gap-8 w-11/12 sm:w-10/12 md:w-600 h-96 border-black z-50 mt-36 mx-auto '>
            <NavBar />
            <div className='flex flex-col gap-5 z-50 '>
              {/* Add To Do  */}
              <AddToDo />
              {/* All To Dos  */}
              <div className='flex flex-col divide-y dark:divide-gray-700 divide-gray-300 dark:bg-slate-800  bg-white rounded-sm py-2 dark:shadow-none shadow-md'>
                {
                  todos?.map((todo) => (
                    <Tasks key={todo?.id} todo={todo} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
