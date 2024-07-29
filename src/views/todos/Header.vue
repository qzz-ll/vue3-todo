<!--
 * @Descripttion: todo的header
 * @Author: luoli
 * @Date: 2023-12-18 13:31:45
 * @LastEditors: luoli
 * @LastEditTime: 2024-07-28 14:05:40
-->
<template>
  <div class="todo-header">
    <!-- 清除空格 .trim -->
    <input type="text" v-model.trim="title" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" />
  </div>
</template>
<script>
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    // 接收addTodo 方法
    props:{ 
      addTodo: {
        type: Function,
        required: true
      }
    },
    setup(props) {
      const title = ref("")
      // 回车的事件的回调函数，用来添加数据
      const add = () => {
        // 获取文本框中输入的数据，判断不为空
        const text = title.value
        if (!text.trim()) return
        const todo = {
          id: Date.now(),
          title: text,
          done: false
        }
        props.addTodo(todo)
        title.value = ""
      }
      
      return {
        title,
        add
      }
    }
  })
</script>
<style scoped>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>