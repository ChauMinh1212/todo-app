import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ToDoList.scss';
import ToDoForm from '../ToDoForm';

ToDoList.propTypes = {
    todos: PropTypes.array,
    onToDoDeleteClick: PropTypes.func,
};

ToDoList.defaultProps = {
    todos: [],
    onToDoDeleteClick: null,
}

function ToDoList(props) {
    const { todos, onToDoDeleteClick, onToDoUpdateClick } = props;
    const [edit, setEdit] = useState({});
    const isEmpty = Object.keys(edit).length === 0;

    const handleOnClickDelete = (todo) => {
        if (onToDoDeleteClick) {
            onToDoDeleteClick(todo);
        }
    }

    const handleOnClickUpdate = (todo) => {
        if (isEmpty === true) {
            setEdit(todo);
        } else {
            onToDoUpdateClick(edit);
            setEdit({});
        }

    }

    return (
        <div>
            <ul className="todo_list">
                {todos.map(todo => (
                    <li key={todo.id} className="todo_item">
                        {isEmpty === true ?
                            <span className="todo_title">{todo.title}</span>
                            :
                            <>
                                {edit.id === todo.id ?
                                    <input className="input_edit" value={edit.title} onChange={(e) => setEdit({ ...edit, title: e.target.value })} />
                                    :
                                    <span className="todo_title">{todo.title}</span>
                                }

                            </>
                        }
                        <span className="btn_list" onClick={() => {
                            handleOnClickUpdate(todo);
                        }}>
                            {isEmpty === false && edit.id === todo.id ? <i id="update" className="far fa-check-square"></i> : <i id="edit" className="fas fa-edit"></i>}

                        </span>
                        <span className="btn_list" onClick={() => handleOnClickDelete(todo)}><i id="delete" className="fas fa-trash-alt"></i></span>
                    </li>

                ))}
            </ul>
        </div>
    );
}

export default ToDoList;