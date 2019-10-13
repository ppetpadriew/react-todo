import React from 'react';
import connect from "react-redux/es/connect/connect";

const mapDispatchToProps = dispatch => {
    return {
        toggleTodo: (todo) => dispatch({
            type: 'TOGGLE_TODO',
            payload: todo,
            index: todo.props.index,
        }),
        reText: (todo, e) => dispatch({
            type: 'RE_TEXT',
            newText: e.target.value,
            index: todo.props.index
        })
    };
};

class Todo extends React.Component {

    render() {
        return (
            <li key={this.props.index}>
                <input type="checkbox" checked={this.props.checked}
                       onChange={this.props.toggleTodo.bind(this, this)}/>
                <input type="text" value={this.props.text} onChange={this.props.reText.bind(this, this)}/>
            </li>
        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Todo);
