import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input
                onChange={props.handleTodoChange}
                type='text'
                name='todo'
                value={props.value}
                placeholder='need todo this'
            />
            <button onClick={props.handleAddTodo}>Add Todo</button>
            <button onClick={props.handleDeleteCompleted}>Delete Completed Todos</button>
        </form>
    );
};

export default TodoForm;