import {Map} from "immutable";

export default function reducer(state = Map(), action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            const key = 'messages';
            let messages = state.get(key);

            return state.set(key,(messages || []).concat(action.message));
        case 'SET_LOADING':
            return state.set('isLoading',action.value);
        default:
            return state

    }
}