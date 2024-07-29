<!--
 * @Descripttion: todo组件
 * @Author: luoli
 * @Date: 2023-12-15 18:12:53
 * @LastEditors: luoli
 * @LastEditTime: 2024-07-28 14:25:44
-->
<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader :addTodo="addTodo"></TodoHeader>
        <TodoList v-if="todos.length" :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo"></TodoList>
        <Empty v-else></Empty>
        <TodoFooter :todos="todos" :checkAll="checkAll" :clearAllDone="clearAllDone"></TodoFooter>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs, watch } from "vue"
// 头部
import TodoHeader from './Header.vue'
// 中间部分
import TodoList from './List.vue'
// 尾部
import TodoFooter from './Footer.vue'
// 空数据组件
import Empty from '@/components/empty/EmptyBox.vue'
// 定义一个接口，约束state的数据类型
import { Todo } from "@/constant/Todos"
import { getTodosStorage, setTodosStorage } from '@/utils/LocalStorage'

export default defineComponent ({
  name: 'TodosIndex',
  // 注册组件
  components: { TodoHeader,TodoList,TodoFooter,Empty },

  setup() {
    // 数据应该用什么数据存储，数组中的每个数据都是一个对象，对象中应该有三个属性（id， title, done)
    const state = reactive<{ todos: Todo []}>({
      todos: []
    })

    // 界面加载完毕后过了一会再读取数据
    onMounted(() => {
      setTimeout(() => {
        state.todos = getTodosStorage()
      }, 1000)
    })

    // 添加数据的方法
    const addTodo = (todo: Todo) => {
      state.todos.unshift(todo)
    }

    // 删除数据的方法
    const deleteTodo = (index: number) => {
      state.todos.splice(index, 1)
    }

    // 修改todo的done属性的状态
    const updateTodo = (todo: Todo, done: boolean) => {
      todo.done = done
    }

    // 全选或全不选的方法
    const checkAll = (done: boolean) => {
      state.todos.forEach(todo => {
        todo.done = done
      });
    }

    // 清理所有选中的数据,保留没有选中的数据
    const clearAllDone = () => {
      state.todos = state.todos.filter(todo => !todo.done)
    }

    // 监视操作：如果todos数组的数据变化了，直接存储到浏览器的缓存中
    // watch(() => state.todos,(value) => {
    //   // 保存到浏览器的缓存中
    //   localStorage.setItem('todos_key', JSON.stringify(value))
    // }, {deep: true})

    watch(() => 
      state.todos,
      (value) => {
        // 保存到浏览器的缓存中
        setTodosStorage(value)
      }, 
      { deep: true }
    )

    return {
      ...toRefs(state),
      addTodo,
      deleteTodo,
      updateTodo,
      checkAll,
      clearAllDone
    }
  }
})
</script>

<style>
.btn {
  /* display: inline-block; */
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  border: 1px solid red;  
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid rgb(177, 177, 177);
  border-radius: 5px;
}
</style>