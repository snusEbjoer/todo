import { ChangeEvent, useState } from 'react'
import React from 'react'

interface Todo{
    name:string,
    checked:boolean
  }

interface TodosProps{
    todos:Todo[]
}
export const Header:React.FC<TodosProps> = ({todos}) => {
    return (
        <div className='p-5'>todos count {todos.length}</div>
    )
}