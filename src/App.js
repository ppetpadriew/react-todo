import React from 'react';
import './App.css';
import TodoInput from './TodoInput';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import TodoList from './TodoList';

function counter(state = {todo: []}, action) {
    switch (action.type) {
        case 'CREATE_TODO':
            return {
                ...state,
                todo: [...state.todo, action.payload]
            };
        default:
            return state
    }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter)
store.subscribe(() => console.log(store.getState()));


function App(todo) {
    return (
        <Provider store={store}>
            <div className="App">
                <TodoInput/>
                <TodoList/>
            </div>
        </Provider>

    );
}

export default App;
