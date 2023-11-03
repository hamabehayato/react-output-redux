import { createSlice } from '@reduxjs/toolkit';
import { INIT_TODO_LIST } from '../constants/data';

const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: {
    todos: INIT_TODO_LIST,
  },
  reducers: {
    addTodo(state, { payload }) {
      state.todos = [...state.todos, { id: state.todos.length + 1, text: payload }];
    },
    deleteTodo(state, { payload }) {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== payload;
      });
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
