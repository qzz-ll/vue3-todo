<!--
 * @Descripttion: item
 * @Author: luoli
 * @Date: 2023-12-12 22:16:48
 * @LastEditors: luoli
 * @LastEditTime: 2024-07-28 14:09:37
-->
<template>
  <li @mouseenter="mouseHandler(true)" @mouseleave="mouseHandler(false)" :style="{background: bgColor, color: myColor}">
    <label>
      <input type="checkbox" v-model="isCheck"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="delTodo">删除</button>
  </li>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { Todo } from '../../constant/Todos'
export default defineComponent({
  name: 'Item',
  props:{
    todo: {
      type: Object as () => Todo, // 函数返回的是Todo类型
      required: true
    },
    deleteTodo: {
      type: Function,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    updateTodo: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const bgColor = ref('white')
    const myColor = ref('black')
    const isShow = ref(false)
    // 鼠标进入和离开事件的回调函数
    const mouseHandler = (flag: boolean) => {
      if (flag) {
        bgColor.value = 'pink'
        myColor.value = 'green'
        isShow.value = true

      } else {
        bgColor.value = 'white'
        myColor.value = 'black'
        isShow.value = false
      }
    }

    // 删除数据
    const delTodo = () => {
      // 提示
      if(window.confirm('确定要删除数据吗？')) {
        props.deleteTodo(props.index)
      }
    }

    // 计算属性的方式 --- 来让当前的复选框选中/不选中
    const isCheck = computed({
      get() {
        return props.todo.done
      },
      set(val) {
        // todo对象中的done进行操作
        props.updateTodo(props.todo, val)
      }
    })
    
    return {
      mouseHandler,
      bgColor,
      myColor,
      isShow,
      delTodo,
      isCheck
    }
  }
})
</script>
<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
    /* display: none; */
  }
  li:hover{
    background-color: gainsboro;
  }
  li:hover button{
    
    /* display: block; */
  } 
  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>