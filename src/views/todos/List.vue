<!--
 * @Descripttion: list
 * @Author: luoli
 * @Date: 2023-12-12 22:16:37
 * @LastEditors: luoli
 * @LastEditTime: 2024-07-26 19:02:47
-->

<template>
  <ul class="todo-main">
		<MyItem v-for="(todo, index) in todos" :key="todo.id + index" :todo="todo" :deleteTodo="deleteTodo" :index="index" :updateTodo="updateTodo"></MyItem>
	</ul>
</template>

<script>
import { defineComponent } from 'vue'
import MyItem from './Item.vue'

export default defineComponent ({
  name:'List',
  components:{ MyItem },
  props: ['todos', 'deleteTodo', 'updateTodo']
})
</script>

<style scoped>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>