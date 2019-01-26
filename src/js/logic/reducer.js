import {calculator,history} from "../index.jsx";

export default function reducer(state, action) {
    console.log(state)
    console.log(action)
    switch (action.type) {
        case 'TOGGLE_HISTORY':
            return {
                ...state,
                history:{
                    ...state.history,
                    isOpened: !state.history.isOpened,
                }
            };
        case 'LOADING_HISTORY':
            return {
                ...state,
                history:{
                    ...state.history,
                    isLoading: action.value,
                }
            };

        case 'LOAD_HISTORY':
            history.getHistory();
            return {
                ...state,
                history:{
                    ...state.history,
                    isLoading: true,
                }
            };

        case 'UPDATE_HISTORY':
            return {
                ...state,
                history:{
                    ...state.history,
                    values: action.value,
                }
            };

        case 'INPUT':
            const result = calculator.input(action.value);
            if(action.value==='=') {
                const newHistory = result.prevValue+'='+result.value
                history.pushHistory(newHistory);
                return {
                    ...state,
                    expression: result,
                    history:{
                        ...state.history,
                        values: state.history.values.concat(newHistory),
                    }
                };
            }
            return {
                ...state,
                expression: result,
            };
        default:
            return state
    }
}