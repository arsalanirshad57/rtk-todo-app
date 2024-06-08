import React from 'react'
import Icon from '../Icons'
const Task = () => {
  return (
    <div className=' flex justify-center items-center gap-4 px-3 py-2 dark:text-gray-300 text-gray-600 '>
      <Icon iconName="iconoir:circle" className={'dark:!text-gray-500  !text-gray-300  '} />
      <p className=" w-full text-sm py-1  border-gray-300 dark:text-gray-300 text-gray-600" >Learn TypeScript</p>
    </div>


  )
}

export default Task