import React, { useState } from 'react'
import Icon from '../Icons'

const Task = ({ todo }) => {

  return (
    <div className=' group flex justify-center items-center gap-4 px-3 py-2 dark:text-gray-300 text-gray-600 '> 
      {/* Check and UnCheck Icon  */}
      <div>
        { 
        todo?.completed ? ( 
          <Icon iconName="bi:check-circle-fill" className={'dark:!text-gray-500  !text-gray-300  '} />
        ) : (
          <Icon iconName="iconoir:circle" className={'dark:!text-gray-500  !text-gray-300  '} />
        )
        }
      </div>
      
      {/* TodoTitle  */}
        <p className={`w-full text-sm py-1 grow border-gray-300 dark:text-gray-300 text-gray-600 truncate ${todo?.completed ? 'line-through' : ''}`}>{todo?.todoTitle}</p>

      {/* Edit and Delete Icon  */}

      < div className="flex gap-1">
        <Icon iconName={'uil:edit'} className={'dark:!text-gray-500  !text-gray-500 hover:dark:bg-slate-600 hover:bg-gray-100  rounded-sm p-[2.5px] hidden group-hover:flex'} />
        <Icon iconName={'radix-icons:cross-2'} className={'dark:!text-gray-500  !text-gray-500 hover:dark:bg-slate-600 hover:bg-gray-100 rounded-sm p-0.5 '} />
      </div>

    </div>
  )
}

export default Task