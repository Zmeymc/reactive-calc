import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux'
import './style_imports'
import App from "./components/App.jsx";
import reducer from "./logic/reducer";
import Calculator from "./logic/calculator";


const initialState = {
    history:{
        isOpened:false,
        values:[]
    },
    loading:[],
    expression:{
        state:'OK',
        value: '0'
    },

};

export const store = createStore(reducer,initialState);
export const calculator = new Calculator(store);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
                <Route exact path="/" component={App} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);