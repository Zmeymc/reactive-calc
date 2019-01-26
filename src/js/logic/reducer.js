import {calculator} from "../index.jsx";

export default function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_HISTORY':
            return {
                ...state,
                historyIsOpened: !state.historyIsOpened
            };
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.value
            };
        case 'SET_RESULT':
            return {
                ...state,
                expression: action.value
            };
        case 'INPUT':
            const result = calculator.input(action.value);
            return {
                ...state,
                expression: result
            };
        default:
            return state
    }
}