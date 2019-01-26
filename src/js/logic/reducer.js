import {calculator,history} from "../index.jsx";

export default function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_HISTORY':
            return {
                ...state,
                historyIsOpened: !state.historyIsOpened
            };
        case 'LOADING_HISTORY':
            return {
                ...state,
                isLoadingHistory: action.value
            };

        case 'LOAD_HISTORY':
            history.getHistory();
            return  {
                ...state,
                isLoadingHistory: true
            };

        case 'UPDATE_HISTORY':
            return {
                ...state,
                history: action.value
            };

        case 'ADD_HISTORY':
            return {
                ...state,
                history: state.history.concat(action.value)
            };

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