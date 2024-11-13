//import { produce } from 'immer' //使用了atomWithImmer
import { KeyboardEvent } from 'react'
import {isAllCompletedAtom,todosAtom} from './store.tsx' //一个模块使用命名导出（即没有 default 关键字），则在导入时需要使用大括号
import {useAtom} from 'jotai'

export default function TodoHeader(){
  const [isAllCompleted] = useAtom(isAllCompletedAtom)//只使用原始值就可以不写set
  const [,setTodos]=useAtom(todosAtom)

  function toggleAll() {
    setTodos(todos=>{
      todos.forEach(it => {
        it.completed = !isAllCompleted
      })
    })
  }

  function addToDo(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Enter") {
      const text = e.currentTarget.value
      if (text) {
        e.currentTarget.value=''
        setTodos(todos=>{
          todos.push({
            id:Math.random(),
            text,
            completed:false,
          })
        })
      }
    }
  }

  return <div>
    <input type="checkbox" checked={isAllCompleted} onChange={toggleAll}/>
    <input type="text" onKeyDown={addToDo}/>
  </div>
}