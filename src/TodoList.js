import React from 'react';
import {connect} from 'react-redux'
import './TodoList.css';

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleTodo: (todo, index) => dispatch({
            type: 'TOGGLE_TODO',
            payload: todo,
            index: index,
        })
    };
}

class TodoList extends React.Component {

    render() {
        const {todos} = this.props;
        return (
            <div className="todo-list">
                <ul>
                    {todos && todos.length
                        ? todos.map((todo, index) => {
                            return <li key={index}><input type="checkbox" checked={todo.checked}
                                                          onChange={this.props.toggleTodo.bind(this, todo, index)}/>{todo.text}</li>;
                        })
                        : "No todos, yay!"}
                </ul>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
