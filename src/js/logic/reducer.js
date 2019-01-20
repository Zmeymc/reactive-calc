import {Map} from "immutable";
import {calculator} from "../index.jsx";

export default function reducer(state = Map(), action) {
    try {
        console.log(state.toJSON());
        switch (action.type) {
            case 'SET_LOADING':
                return state.set('isLoading', action.value);
            case 'SET_RESULT':
                return state.set('expression', action.value);
            case 'INPUT':
                if(state.get('isLoading'))
                    return state;
                const result = calculator.input(action.value);
                switch (result.state) {
                    case 'OK':
                        return state.set("expression", result.value);
                    case 'EVALUATING':
                        return state.set('isLoading', true);
                    case 'ERROR':
                    default:
                        return state.set('expression', result.value);

                }
            default:
                return state

        }
    }
    finally {
        console.log(state.toJSON());
    }
}