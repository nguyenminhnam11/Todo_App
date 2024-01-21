import React, { useState } from 'react';
import { InputForm, Wrapper } from './styled';
import Button from '../../../../components/Button';
import { useDispatch } from 'react-redux';
import { todoAdd } from '../../../../store/modules/todo/actions';

function TodoForm(props) {
    const [ value, setValue ] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const dispatch = useDispatch()
    const handleSave = () => {
        if (value.trim() !== ''){
            dispatch(todoAdd(value))
            setValue('')
        }else {
            alert('Please input your task!')
        }
    }
    return (
        <div>
            <Wrapper>
                <InputForm value={value} onChange={handleChange}/>
                <Button onClick={handleSave} >Save</Button>
            </Wrapper>
        </div>
    );
}

export default TodoForm;