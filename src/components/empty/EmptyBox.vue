<!--
 * @Descripttion: 无数据或展示传进来的数据信息
 * @Author: luoli
 * @Date: 2023-12-13 17:19:21
 * @LastEditors: luoli
 * @LastEditTime: 2023-12-18 13:45:57
-->
<template>
  <div class="empty-box">{{message}}</div>
</template>
<script>
 export default {
  name: 'EmptyDiv',
  props: {
    message: {
      type: String,
      default: '暂无数据'
    }
  }
}
</script>
<style scoped>
  .empty-box {
    text-align: center;
    font-size: 14px;
    margin: 20px;
  }
</style>