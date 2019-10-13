export default function rootReducer(state = {todos: []}, action) {
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
                    return todo;
                })
            };
        case 'RE_TEXT':
            return {
                ...state,
                todos: state.todos.map((todo, i) => {
                    if (i === action.index) {
                        return {...todo, text: action.newText}
                    }
                    return todo;
                })
            }
        default:
            return state
    }
}
