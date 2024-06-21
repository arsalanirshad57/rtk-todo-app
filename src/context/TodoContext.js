import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: '',
            todoTitle: '',
            complete: false
        }
    ],
    onDelte: () => { },
    onEdit: () => { },
    addTodo: () => { },
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}