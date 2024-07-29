<!--
 * @Descripttion: 总计和已完成
 * @Author: luoli
 * @Date: 2023-12-12 22:17:11
 * @LastEditors: luoli
 * @LastEditTime: 2024-07-29 19:01:24
-->
<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll" />
    </label>
    <span><span>已完成 {{doneTotal}}</span> / 全部 {{todos.length}}</span>
    <button class="btn btn-danger" @click="clear">清除已完成任务</button>
  </div>  
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { Todo } from '@/constant/Todos'
export default defineComponent({
  name: 'Footer',
  props: {
    todos: {
      type: Array as () => Todo [], 
      required: true
    },
    checkAll: {
      type: Function,
      required: true
    },
    clearAllDone: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    // 全选/全不选
    const isCheckAll = computed({
      get() {
        return doneTotal.value > 0 && props.todos.length === doneTotal.value
      },
      set(val) {
        props.checkAll(val)
      }
    })
    const doneTotal = computed(() => {
      return props.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    })

    const clear = () => {
      props.clearAllDone()
    }
    const total = ref(10)
    
    return {
      isCheckAll,
      doneTotal,
      total,
      clear
    }
  }
})
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    /* margin-right: 20px; */
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>