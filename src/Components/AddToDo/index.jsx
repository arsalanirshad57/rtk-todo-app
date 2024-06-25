import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/todo-slice'

import Icon from '../Icons'

const AddToDo = () => {
    const [inputVal, setInputVal] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(addTodo(inputVal))
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