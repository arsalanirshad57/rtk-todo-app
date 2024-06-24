import { useEffect, useState } from 'react';

import BgImage from './Components/BgImage';
import NavBar from './Components/NavBar';
import Tasks from './Components/Task';
import './App.css';
import AddToDo from './Components/AddToDo';

function App() {

  // Sates and Variables

  const [todos, setTodos] = useState([])



  return (
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
  );
}

export default App;
