import { ChangeEvent, useState } from 'react'
import { Todo } from './Todo'
import { Header } from './Header'
import { TodoLIst } from './TodoList'

export const TodoPanel = () => {

    interface Todo{
        name:string,
        checked:boolean
      }

      const [todo, setTodo] = useState<string>("")
      const [todos, setTodos] = useState<Todo[]>([])
      const [check, setCheck] = useState<boolean>(false)
    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value)
      }
      const addTodo = () => {
        if (todo) {
          const newTodo = {
            name:todo,
            checked:check
          }
          setTodos([...todos, newTodo])
          setTodo("")
        }
      }
      const deleteTodo = (name:string) => {
        setTodos(todos => todos.filter(t => t.name !== name))
      }
      const toggleTodo = (name: string) => {
        setTodos(
          todos => todos.map(
            t =>
            t.name === name
            ?  {...t, checked: !t.checked}
            :  t
          )
        )
      }

    return (
        <div>
            <Header todos={todos}/>
            <div className='flex flex-row justify-center gap-2 p-5'>
            <input className='shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" placeholder='enter todo' name='todo' value={todo} onChange={handleChange}/>
            <button className="shadow-md" onClick={addTodo}>Add todo</button>
            </div>
                <div className='flex flex-row justify-center gap-2'>
                    <TodoLIst todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
                </div>
        </div>
    )
}