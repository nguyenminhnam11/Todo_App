import { createReducer } from "@reduxjs/toolkit";
import { todoAdd, todoDelete, todoToggleStatus } from "./actions";

const todoReducer = createReducer(
  {
    data: [],
  },
  (builder) => {
    builder
      .addCase(todoAdd.fulfilled, (state, action) => {
        state.data = [...state.data, action.payload];
      })
      .addCase(todoDelete.fulfilled, (state, action) => {
        state.data = state.data.filter(todo => todo.id !== action.payload);
      })
      .addCase(todoToggleStatus.fulfilled, (state, action) => {
        state.data = state.data.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              status: !todo.status
            };
          }
          return todo
        });
      });
  }
);

export default todoReducer;
