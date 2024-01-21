import React from "react";
import { TodoName, Wrapper } from "./styled";
import Button from "../../../../../components/Button";
import { useDispatch } from "react-redux";
import {
  todoDelete,
  todoToggleStatus,
} from "../../../../../store/modules/todo/actions";

function TodoItem({ value, id, status }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const isConfirmed = window.confirm("Are you sure delete to do?");

    if (isConfirmed) {
      dispatch(todoDelete(id));
    }
  };

  const handleToggleStatus = () => {
    dispatch(todoToggleStatus(id));
  };
  return (
    <Wrapper>
      <TodoName status={status}>
        <span onClick={handleToggleStatus}>{value}</span>
      </TodoName>
      <Button type="danger" onClick={handleDelete}>
        Delete
      </Button>
    </Wrapper>
  );
}

export default TodoItem;
