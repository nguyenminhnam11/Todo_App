import styled from "styled-components";
import backGround from '../../images/tobias-roetsch-anomaly.jpg'
const Wrapper = styled.div`
    background: url(${backGround});
    background-size: cover;
    overflow: auto;
    min-height: 100vh;
`

const TodoContainer = styled.div`
    background: linear-gradient(-120deg, #842DA0, #B3DAE9);
    opacity: 0.9;
    border: none;
    box-shadow: 0 0 30px #842DA0;
    max-width: 600px;
    min-width: 400px;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 30px;
    height: 600px;
    overflow-x: auto;
    border-radius: 20px;
`

export { Wrapper, TodoContainer }