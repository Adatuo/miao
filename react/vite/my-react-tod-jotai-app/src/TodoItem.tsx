import { useAtom } from 'jotai'
import {TodoType,todosAtom} from './store'

//import { atomWithImmer } from 'jotai-immer'

//美观
type TodoItemProps={
  todo:TodoType
}

export default function TodoItem({todo}:TodoItemProps) {
  const [,setTodos]=useAtom(todosAtom) //只改变数据 逗号
  function toggle() {
    const id = todo.id
    setTodos(todos =>{
      const todo = todos.find(it => it.id == id)! //! 是 TypeScript 的非空断言，表示确信 find 方法会返回一个有效的 Todo 项目（即该项目存在）。如果没有找到匹配的项目，代码会抛出错误。
      todo.completed = !todo.completed
    })
  }
  function deleteTodo() {
    setTodos(todos=>{
      //注意下面的findIndex始终会返回-1
      //因为todos实际上一个draft，从中读取出的值（it）也是draft，而todo则是原始数据中的todo对象
      //所以在immer的变更函数内，做对比时只能拿原始类型（string，boolean，number等）做对比，拿对象做对比始终不会相等
      const idx = todos.findIndex(it => it.id == todo.id)//能访问到todo,每一个独立的input it.id/original(it)
      if (idx >=0 ) {
        todos.splice(idx,1)
      }
    })
  }
  return(
    <li className={todo.completed ? 'completed':'active'}>
      <input type="checkbox" checked={todo.completed} onChange={toggle}/>
      <span>{todo.text}</span>
      <button onClick={deleteTodo}>&times;</button>
    </li>
  )
}