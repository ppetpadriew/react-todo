import React from 'react';
import connect from "react-redux/es/connect/connect";
import {DragSource} from 'react-dnd'

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
        }),
        deleteTodo: (index) => dispatch({
            type: 'DELETE_TODO',
            index: index
        })
    };
};

class Todo extends React.Component {

    render() {
        const {isDragging, connectDragSource} = this.props;

        return connectDragSource(
            <li key={this.props.index}>
                <input type="checkbox" checked={this.props.checked}
                       onChange={this.props.toggleTodo.bind(this, this)}/>
                <input type="text" value={this.props.text} onChange={this.props.reText.bind(this, this)}/>
                <button onClick={this.props.deleteTodo.bind(this, this.props.index)}>X</button>
            </li>
        );
    }
}

const reduxComp = connect(
    null,
    mapDispatchToProps
)(Todo);

export default DragSource('todo', {
    beginDrag: props => {
        console.log('Begin dragging');
        return props;
    }
}, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: connect.dragPreview()
}))(reduxComp);
