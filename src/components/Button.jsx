import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const BgButton = {
    primary: '#0D6EFD',
    secondary: '#6C757D',
    success: '#198754',
    danger: '#DC3545',
    warning: '#FFC10A'
}

const TextButton = {
    primary: '#FFF',
    secondary: '#FFF',
    success: '#FFF',
    danger: '#FFF',
    warning: '#000'
}
const Wrapper = styled.button`
    background: ${props => BgButton[props.type]};
    color: ${props => TextButton[props.type]};
    padding: 9px 19px;
    border-radius: 20px;
    border: none;
    font-size: 16px;
    transition: .3s;
    &:hover {
        opacity: 0.9;
        box-shadow: 0 0 10px ${props => BgButton[props.type]};
        cursor: pointer;
    }
`

function Button({ type, children, onClick }) {
    return (
        <div>
            <Wrapper onClick={onClick} type={type}>{children}</Wrapper>
        </div>
    );
}

Button.propTypes = {
    type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning'])
}

Button.defaultProps =  {
    type: 'primary'
}

export default Button;