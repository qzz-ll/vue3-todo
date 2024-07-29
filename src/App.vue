<!--
 * @Descripttion: 
 * @Author: luoli
 * @Date: 2023-12-15 14:51:57
 * @LastEditors: luoli
 * @LastEditTime: 2024-07-29 19:02:04
-->
<template>
  <todos-index></todos-index>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodosIndex from "@/views/todos/index.vue"

export default defineComponent({
  name: 'App',
  components: {
    TodosIndex
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background: #fff;
}
</style>
