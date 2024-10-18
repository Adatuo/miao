
<script setup>
import { useList } from '@/stores/dataList';
let dataList = useList()
</script>

<template>
  <div>
    <h1>todo!</h1>
    <div>
      <input type="checkbox" @click="dataList.toggleAll">
      <input type="text" @keydown.enter="dataList.addToDo" placeholder="What needs to be done?"><!-- 组合式API可以不传$event -->
    </div> 

      
      <ul :class="'visible-' + dataList.visibleType">
        <li v-for="(todo,index) in dataList.todos" >
          <input type='checkbox' v-model="todo.completed" />
          <span>{{todo.text}}</span>
          <button @click="todos.deleteTodo(index)">&times;</button>
        </li>
      </ul>
      
    
    <div>
      <span>{{ dataList.leftCount }} item{{dataList.leftCount > 1 ? 's':''}} left</span>
      <div>
        <label><input type="radio" v-model="dataList.visibleType" value="All">All</label>
        <label><input type="radio" v-model="dataList.visibleType" value="Active">Active</label>
        <label><input type="radio" v-model="dataList.visibleType" value="completed">completed</label>
      </div>
    </div>


  </div>
</template>