/*
 * @Descripttion: 
 * @Author: luoli
 * @Date: 2023-12-18 13:59:20
 * @LastEditors: luoli
 * @LastEditTime: 2024-07-26 17:56:04
 */
// 定义一个接口，约束state的数据类型
export interface Todo {
  id: number,
  title: string
  done: boolean
}