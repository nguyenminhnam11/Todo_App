import React from "react";
import { Wrapper } from "./styled";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { selectTodoData } from "../../../../store/modules/todo/selectors";

function TodoList() {
  const todoData = useSelector(selectTodoData);
  return (
    <Wrapper>
      {todoData.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          value={todo.value}
          status={todo.status}
        />
      ))}
    </Wrapper>
  );
}

export default TodoList;
