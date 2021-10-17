import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ToDoForm.scss';

ToDoForm.propTypes = {
    onSubmit: PropTypes.func,
};

ToDoForm.defaultProps = {
    onSubmit: null,
}

function ToDoForm(props) {
    const [input, setInput] = useState('');
    const { onSubmit } = props;

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (!onSubmit) return;
        onSubmit({
            id: Math.floor(Math.random() * 10000),
            title: input
        });
        setInput('');
    }

    const handleOnChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <form onSubmit={handleOnSubmit} className="form_add">
            <input className="input_add" type="text" value={input} onChange={handleOnChange} placeholder="Add todo"/>
            <button className="btn_add"><i className="far fa-plus-square"></i></button>
        </form>
    );
}

export default ToDoForm;