import React from 'react';
import connect from "react-redux/es/connect/connect";

const mapDispatchToProps = dispatch => {
    return {
        toggleTodo: (todo) => dispatch({
            type: 'TOGGLE_TODO',
            payload: todo,
            index: todo.props.index,
        })
    };
};

class Todo extends React.Component {

    render() {
        return (
            <li key={this.props.index}>
                <input type="checkbox" checked={this.props.checked}
                       onChange={this.props.toggleTodo.bind(this, this)}/>
                {this.props.children}
            </li>
        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Todo);
