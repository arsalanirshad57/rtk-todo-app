import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}



const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {

        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                todoTitle: action.payload,
                completed: false,
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter(prevTodo => prevTodo.id !== action.payload)
        },

        completeTodo: (state, action) => {

            state.todos = state.todos.map(prev => {
                if (prev.id === action.payload.id) {
                    return {
                        ...prev,
                        completed: action.payload.check
                    }

                } else {
                    return prev
                }
            })
        },

        editTodo: (state, action) => {
            state.todos = state.todos.map((prevEdit) => {
                if (prevEdit.id === action.payload.id) {
                    return {
                        ...prevEdit,
                        todoTitle: action.payload.value
                    }
                } else {
                    return prevEdit
                }
            })
        }


    }
})

export const { addTodo, removeTodo, completeTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer