import React, { useState } from "react"


interface TodoProps{
    name:string,
    checked:boolean
    deleteTodo:Function
    toggleTodo:Function
  }

export const Todo: React.FC<TodoProps> = ({ name, checked, deleteTodo, toggleTodo}) => {

    return (
        <div className="">
            <div className="flex flex-row gap-2 items-baseline justify-between">
                <div className="">{name}</div>
                <div className='flex flex-row gap-2 items-baseline'>
                <button className="shadow-md" onClick={() => toggleTodo(name)}><svg className="w-3 h-3 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
  </svg></button>
                <button className="shadow-md flex justify-between" onClick={() => deleteTodo(name)}><svg className="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
  </svg></button>
                </div>
            </div>
        </div>
    )
}