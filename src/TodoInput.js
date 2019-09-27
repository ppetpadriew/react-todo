import React from 'react';
import {connect} from 'react-redux'

const mapDispatchToProps = dispatch => {
    return {
        createTodo: (text) => dispatch({
            type: 'CREATE_TODO',
            payload: text
        })
    }
}

function TodoInput({createTodo}) {
    function handleKeyDown(e) {
        if (e.keyCode == 13) {
            createTodo(e.target.value);
        }
    }

    return (
        <div className="todo-input">
            Todo: <input type="text" onKeyDown={handleKeyDown}/>
        </div>
    );
}

export default connect(
    null,
    mapDispatchToProps
)(TodoInput);
