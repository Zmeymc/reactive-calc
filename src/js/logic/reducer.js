import {Map} from "immutable";
import * as calculator from "./calculator";
import evaluate from "./api_logic";

export default function reducer(state = Map(), action) {
    try {
        console.log(state.toJSON());

        let key, value;
        switch (action.type) {
            case 'SET_LOADING':
                return state.set('isLoading', action.value);
            case 'SET_RESULT':
                let data = calculator.getCalculationDataSkeleton();
                data.value = action.value;
                data.currentNumber = action.value;
                return state.set('calculationData', data);
            case 'INPUT':
                key = 'calculationData';
                switch (action.value) {
                    case 'AC':
                        value = 'clear';
                        break;
                    case '+/-':
                        value = 'invert';
                        break;
                    case '=':
                        state = state.set('isLoading', true);
                        value = 'evaluate';
                        break;
                    default:
                        value = action.value;
                }
                const calcucationData = state.get(key);
                return state.set(key, calculator.input(calcucationData, value, evaluate));
            default:
                return state

        }
    }
    finally {
        console.log(state.toJSON());
    }
}