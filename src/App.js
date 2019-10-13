import React from 'react';
import './App.css';
import TodoInput from './TodoInput';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import TodoList from './TodoList';
import rootReducer from './reducer';

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
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
