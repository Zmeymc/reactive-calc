import * as Materialize from "materialize-css";

export default function reducer(state, action) {
    let loading;
    switch (action.type) {

        case 'TOGGLE_HISTORY':
            return {
                ...state,
                history:{
                    ...state.history,
                    isOpened: !state.history.isOpened,
                }
            };

        case 'START_LOADING':
            loading = state.loading;
            if(loading.includes(action.value))
                return state;
            loading.push(action.value);
            return {
                ...state,
                loading: loading
            };

        case 'STOP_LOADING':
            loading = state.loading;
            const index = loading.indexOf(action.value);
            if(index<0)
                return state;
            loading.splice(index, 1);
            return {
                ...state,
                loading: loading
            };

        case 'UPDATE_HISTORY':
            return {
                ...state,
                history:{
                    ...state.history,
                    values: action.value,
                }
            };
        case 'ADD_HISTORY':
            return {
                ...state,
                history:{
                    ...state.history,
                    values: state.history.values.concat(action.value),
                }
            };

        case 'ADD_ERROR':
            Materialize.toast({html: action.value},500);
            return state;

        case 'UPDATE_EXPRESSION':
           return {
                    ...state,
                    expression: action.value,

                };
        default:
            return state
    }
}