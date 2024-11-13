//不知为何这里创建了也会"找不到模块",重新启动vs即可
import TodoHeader from './TodoHeader.tsx'
import TodoList from './TodoList.tsx'
import TodoFooter from './TodoFooter.tsx'



function TodoApp(props) {//已声明“props”，但从未读取其值 相当于warning
  return <div>
    <h1>ToDos</h1>
    <TodoHeader/>
    <TodoList/>
    <TodoFooter/>
  </div>
}

export default TodoApp

