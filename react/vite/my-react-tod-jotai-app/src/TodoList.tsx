import { todosAtom, visibleTypeAtom } from './store.tsx'
import TodoItem from './TodoItem.tsx'
import {useAtom, useAtomValue} from 'jotai'

export default function TodoList() {
  const [todos,setTodos]=useAtom(todosAtom)
  const visibleType = useAtomValue(visibleTypeAtom)

  return <ul className={'show-'+`${visibleType}`}>
    {
      todos.map((todo,idx)=>{
        return <TodoItem todo={todo} key={todo.id}/>
      })
    }
  </ul>
}