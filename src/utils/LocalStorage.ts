/*
 * @Descripttion: 浏览器中各数据的方法 
 * @Author: luoli
 * @Date: 2023-12-13 16:15:08
 * @LastEditors: luoli
 * @LastEditTime: 2024-07-26 23:45:03
 */
import { Todo } from "../constant/Todos"

// 从浏览器中获取todos数据
export const getTodosStorage = ():Todo [] => {
  let todos = []
  if (localStorage.getItem('todos')) {
    todos = JSON.parse(localStorage.getItem('todos') || '[]') 
  }
  return todos
}

// 把todos数据存入浏览器中
export const setTodosStorage = (todos: Todo []) => {
  localStorage.removeItem('todos')
  if (!todos.length) return
  localStorage.setItem('todos', JSON.stringify(todos))
}