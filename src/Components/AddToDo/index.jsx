import React from 'react'
import Icon from '../Icons'

const AddToDo = () => {
    return (
        <div className=' flex justify-between items-center gap-4 dark:bg-slate-800  bg-white rounded-sm px-3 py-3.5'>
            <Icon iconName="iconoir:circle" className={'dark:!text-gray-500  !text-gray-300  '} />
            <input type="text" className=" w-full text-sm py-1 focus:outline-none  border-gray-300 bg-transparent dark:text-gray-300 text-gray-600" placeholder='Create a new To Do ' />
        </div>
    )
}
// teenyicons:tick-circle-outline 
export default AddToDo