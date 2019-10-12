import React from 'react';
import './App.css';
import TodoInput from './TodoInput';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import TodoList from './TodoList';

function counter(state = {todos: []}, action) {
    switch (action.type) {
        case 'CREATE_TODO':
            return {
                ...state,
                todos: [...state.todos, {text: action.payload, checked: false}]
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map((todo, i) => {
                    if (i === action.index) {
                        return {...todo, checked: !todo.checked}
                    }
                })
            };
        default:
            return state
    }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter)
store.subscribe(() => console.log(store.getState()));


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <TodoInput/>
                    <TodoList/>
                </div>
            </Provider>

        );
    }
}

export default App;
