import React from 'react';
import {connect} from 'react-redux'
import './TodoList.css';
import Todo from './Todo';

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

class TodoList extends React.Component {

    render() {
        const {todos} = this.props;
        return (
            <div className="todo-list">
                <ul>
                    {todos && todos.length
                        ? todos.map((todo, index) => {
                            return <Todo index={index} checked={todo.checked}>{todo.text}</Todo>;
                        })
                        : "No todos, yay!"}
                </ul>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    null
)(TodoList);
