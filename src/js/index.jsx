import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import './style_imports'
import App from "./components/App.jsx";
import reducer from "./logic/reducer";
import Calculator from "./logic/calculator";


const onEvaluated = (result) =>{
    store.dispatch({
        type: 'SET_RESULT',
        value: result.value
    });
    store.dispatch({
        type: 'SET_ERROR',
        value: result.state === 'ERROR'
    });
    store.dispatch({
        type: 'SET_LOADING',
        value: false
    });
};



export const store = createStore(reducer);
export const calculator = new Calculator(onEvaluated);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={App} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);