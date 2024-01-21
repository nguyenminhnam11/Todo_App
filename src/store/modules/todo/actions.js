import { createAsyncThunk } from "@reduxjs/toolkit";
import { insertTodo } from "./services";

const todoAdd = createAsyncThunk("todo/Add", (value) => {
  const todo = insertTodo(value);
  return todo;
});

const todoDelete = createAsyncThunk("todo/Delete", (id) => {
  return id;
});

const todoToggleStatus = createAsyncThunk("todo/Status", (id) => {
  return id;
});

export { todoAdd, todoDelete, todoToggleStatus };
