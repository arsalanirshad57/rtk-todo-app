import React, { useState } from 'react'
import Icon from '../Icons'
import { useTodo } from '../../context/TodoContext'


const Task = ({ todo }) => {
  const [editVal, setEditVal] = useState(todo?.todoTitle )
  const [edit, setEdit] = useState(false)
  const { onDelete, onEdit, toogleComplete } = useTodo()

  const handleDelete = (id) => {
    onDelete(id)
  }

  const handleEdit = () => {
    setEdit(!edit)
  }

  const handleEditSubmit = (id) => {
    onEdit(id, {
      todoTitle: editVal == '' ? todo?.todoTitle : editVal,
    })
    setEdit(false)
  }

  const handleComplete = () => {
    toogleComplete(todo?.id, {
      completed: !todo?.completed
    })
  }
  return (
    <div className=' group flex justify-center items-center gap-4 px-3 py-2 dark:text-gray-300 text-gray-600 '> 
      {/* Check and UnCheck Icon  */}
      <div onClick={handleComplete}>
        {
        todo?.completed ? ( 
          <Icon iconName="bi:check-circle-fill" className={'dark:!text-gray-500  !text-gray-300  '} />
        ) : (
          <Icon iconName="iconoir:circle" className={'dark:!text-gray-500  !text-gray-300  '} />
        )
        }
      </div>
      {/* TodoTitle  */}
      {edit ? (
        <form onSubmit={() => handleEditSubmit(todo?.id)} className='w-full'>
          <input type="text" className=' w-full border border-gray-300 dark:border-gray-700 pl-1 bg-transparent outline-none rounded py-1 text-sm ' value={editVal} onChange={(e) => setEditVal(e.target.value )} />
        </form>
      ) : (
        <p className={`w-full text-sm py-1 grow border-gray-300 dark:text-gray-300 text-gray-600 truncate ${todo?.completed ? 'line-through' : ''}`}>{todo?.todoTitle}</p>
      )
      }
      {/* Edit and Delete Icon  */}

      < div className="flex gap-1">
        <Icon onClick={() => handleEdit(todo?.id)} iconName={'uil:edit'} className={'dark:!text-gray-500  !text-gray-500 hover:dark:bg-slate-600 hover:bg-gray-100  rounded-sm p-[2.5px] hidden group-hover:flex'} />
        <Icon onClick={() => handleDelete(todo?.id)} iconName={'radix-icons:cross-2'} className={'dark:!text-gray-500  !text-gray-500 hover:dark:bg-slate-600 hover:bg-gray-100 rounded-sm p-0.5 '} />
      </div>

    </div>
  )
}

export default Task