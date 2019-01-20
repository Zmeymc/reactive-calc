import {store} from "../index.jsx";
import * as api from "./api"
export default function evaluate(expression) {
   /* store.dispatch({
        type: 'SET_LOADING',
        value: true
    });*/
    api.evaluate(setEvaluationResults);

};

const setEvaluationResults = (value) => {
    store.dispatch({
        type: 'SET_RESULT',
        value: value
    });
    store.dispatch({
        type: 'SET_LOADING',
        value: false
    });
};
