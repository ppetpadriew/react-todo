import React from 'react';
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return {
        todo: state.todo
    }
}

function TodoList({todo}) {
    return (
        <div className="todo-list">
            <ul>
                {todo && todo.length
                    ? todo.map((todo, index) => {
                        return <li key={index}>{todo}</li>;
                    })
                    : "No todos, yay!"}
            </ul>
        </div>
    );
}

export default connect(
    mapStateToProps,
    null
)(TodoList);
