import {calculator,history} from "../index.jsx";

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

        case 'GET_HISTORY':
            history.getHistory();
            return state;

        case 'INPUT':
            const result = calculator.input(action.value);
            if(action.value==='=')
                history.pushHistory(result.prevValue+'='+result.value);
            return {
                ...state,
                expression: result
            };
        default:
            return state
    }
}