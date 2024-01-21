import React from 'react';
import { TodoContainer, Wrapper } from './styled';
import TodoTitle from './components/TodoTitle';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function Todo(props) {
    return (
        <>
         <Wrapper>
            <TodoContainer>
                <TodoTitle />
                <TodoForm />
                <TodoList />
            </TodoContainer>
         </Wrapper>   
        </>
    );
}

export default Todo;