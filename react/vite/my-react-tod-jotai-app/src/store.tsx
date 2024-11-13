import { atom } from 'jotai'
import { atomWithImmer } from 'jotai-immer'

const visibleTypeAtom = atom('all')

const editingIndexAtom = atom(-1)

//还是在这里声明类型,也可以导出
export type TodoType = {
  id: string | number,
  text: string,
  completed: boolean
}

const todosAtom = atomWithImmer<TodoType[]>([
  {
    text: 'Ghost in the Shell',
    id: 'asd12',
    completed: false
  },
  {
    text: 'Serial Experiments Lain',
    id: 'asd34',
    completed:  true 
  }
])

//Derived atoms 就相当于 completed
const leftCountAtom = atom((get) => {
  const todos = get(todosAtom)
  return todos.filter(it => it.completed == false).length
})

const isAllCompletedAtom = atom((get) => {
  const todos = get(todosAtom)
  return todos.every(it => it.completed == true)
})

const hasCompletedAtom = atom((get) => {
  const todos = get(todosAtom)
  return todos.some(it => it.completed == true)
})

export {visibleTypeAtom,editingIndexAtom,todosAtom,leftCountAtom,isAllCompletedAtom,hasCompletedAtom}