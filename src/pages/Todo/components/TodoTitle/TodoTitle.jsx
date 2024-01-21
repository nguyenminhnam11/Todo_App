import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
    font-size: 36px;
    text-align: center;
    margin: 30px 0 30px 0;
`

function TodoTitle(props) {
    return (
        <div>
            <Wrapper>My Todos</Wrapper>
        </div>
    );
}

export default TodoTitle;