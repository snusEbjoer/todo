import React, { useState } from "react"
import { Todo } from "./Todo"

interface Todo{
    name:string,
    checked:boolean
  }

interface TodosProps{
    todos:Todo[]
    deleteTodo:Function
    toggleTodo:Function
}
const toggleState = {
    all: 'all',
    done: 'done',
    notDone: 'not done'
}

export const TodoLIst:React.FC<TodosProps> = ({todos, deleteTodo, toggleTodo}) => {
    

    const [toggle, setToggle] = useState(toggleState.all)

    return (
        <div className="">
        <div className="flex flex-row justify-center gap-3 justify-between pb-5">
            <button className="shadow-md" onClick={() => setToggle(toggleState.all)}>all</button>
            <button className="shadow-md" onClick={() => setToggle(toggleState.done)}>done</button>
            <button className="shadow-md" onClick={() => setToggle(toggleState.notDone)}>not done</button>
        </div>
        <div className="">
            {toggle === toggleState.all && todos.map(todo => todo.checked ?
                    <div className='p-3 shadow-md rounded-lg mb-3 bg-green-500'>
                        <Todo name={todo.name} checked={todo.checked} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
                    </div> : <div className='p-3 shadow-md rounded-lg mb-3 bg-gray-100'>
                        <Todo name={todo.name} checked={todo.checked} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
                    </div>
                        )}
            {toggle === toggleState.done && todos.map(todo => todo.checked === true &&
                    <div className='p-3 shadow-md rounded-lg mb-3 bg-green-500'>
                        <Todo name={todo.name} checked={todo.checked} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
                    </div>
                        )}
            {toggle === toggleState.notDone && todos.map(todo => todo.checked === false &&
                    <div className='p-3 shadow-md rounded-lg mb-3 bg-gray-100'>
                        <Todo name={todo.name} checked={todo.checked} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
                    </div>
                        )}

        </div>
        </div>
    )
}