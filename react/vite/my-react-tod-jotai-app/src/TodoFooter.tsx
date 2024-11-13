import { useAtom, useAtomValue, useSetAtom } from "jotai"
import { hasCompletedAtom, leftCountAtom, todosAtom, visibleTypeAtom } from "./store"

export default function TodoFooter() {
  const leftCount = useAtomValue(leftCountAtom)//只需要使用值可以这样写
  //const [leftCount,setLeftCount] = useAtom(leftCountAtom)
  const hasCompleted = useAtomValue(hasCompletedAtom)
  const [visibleType,setVisibleType] =useAtom(visibleTypeAtom)
  const setTodos = useSetAtom(todosAtom)//需要使用set可以这样写

  function clearCompleted() {//清除(filter)所有已完成任务
    setTodos(todos=>{
      return todos.filter(it => it.completed == false) //由于给变量修改值是无法监控的,所以直接return
    })
  }

  return(
    <div>
      <span>{leftCount} items left</span>
      <div>
        <label><input type="radio" checked={visibleType == 'all'} onChange={()=>setVisibleType('all')}/> All</label>
        <label><input type="radio" checked={visibleType == 'active'} onChange={()=>setVisibleType('active')}/> Actice</label>
        <label><input type="radio" checked={visibleType == 'completed'} onChange={()=>setVisibleType('completed')}/>Completed</label>
      </div>
      {hasCompleted &&
        <button onClick={clearCompleted}>clear completed</button>
      }
    </div>
  )
}