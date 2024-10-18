import { defineStore } from 'pinia'
import { ref, computed, watch, reactive, watchEffect ,provide,inject } from "vue";
// let {ref, computed, watch, reactive, watchEffect ,provide,inject} = Vue

export const useList = defineStore('List', () => {
    const  todos = reactive(
      [
        {
          id: 'dc',
          text: 'eat',
          completed: true,
        }, {
          id: 'es',
          text: 'drink',
          completed: false,
        }, {
          id: 'ev',
          text: 'sleep',
          completed: true,
        }
      ]
    )
    let visibleType = ref('all')

    function addToDo(e) {
      let text = e.target.value.trim()
      if (text) {
        todos.push({
          text,
          completed: false,
        })
      }
        e.target.value = ''
      }
    function toggleAll(){
      if (todos.every(todo => todo.completed == true)) {//全部true就全部false
        todos.forEach(todo => todo.completed = false);
      }else if (todos.some(todo => todo.completed == false)) {
        todos.forEach(todo => todo.completed = true);
      }
    }  

    function deleteTodo(index) {
      todos.splice(index,1)
    }
    
    // function leftCount() {
    //   return todos.filter(todo => todo.completed == false).length
    // }
    let leftCount = computed(()=>{
      return todos.filter(todo=>todo.completed == false).length
    })

    return {
      todos,visibleType,
      addToDo,toggleAll,
      deleteTodo,
      leftCount,
    }
  },
)
// 选项式  
//   state: () => {
//     const  todos = reactive(
//       [
//         {
//           id: 'dc',
//           text: 'eat',
//           completed: true,
//         }, {
//           id: 'es',
//           text: 'drink',
//           completed: false,
//         }, {
//           id: 'ev',
//           text: 'sleep',
//           completed: true,
//         }
//       ]
//     )
//       return {
//         todos
//       }
//     },  
  
//     actions: {
//       addToDo(e) {
//         let text = e.target.value.trim()
//         if (text) {
//           this.todos.push({
//             text,
//             completed: false,
//           })
//         }
//         e.target.value = ''
//       }
//     }
