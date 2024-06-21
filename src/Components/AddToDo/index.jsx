import React, { useState } from 'react'
import Icon from '../Icons'
import { useTodo } from '../../context/TodoContext'

const AddToDo = () => {
    const [inputVal, setInputVal] = useState('')
    const { addTodo } = useTodo()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputVal != '') {
            addTodo({
                todoTitle: inputVal,
                complete: false
            })
        }
        setInputVal('') 
    }

    return (
        <form onSubmit={handleSubmit} className='flex justify-between items-center gap-4 dark:bg-slate-800  bg-white rounded-sm px-3 py-3.5'>

            <Icon
                iconName="iconoir:circle"
                className={'dark:!text-gray-500  !text-gray-300  '}
            />

            <input
                type="text"
                value={inputVal}
                placeholder='Create a new To Do '
                className=" w-full text-sm py-1 focus:outline-none  border-gray-300 bg-transparent dark:text-gray-300 text-gray-600"
                onChange={(e) => setInputVal(e.target.value)}
            />

        </form>
    )
}
export default AddToDo  