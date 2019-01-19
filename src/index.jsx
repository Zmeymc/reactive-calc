import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import './css_imports'
import App from "./components/App.jsx";
import reducer from "./reducer";

export const store = createStore(reducer);

store.dispatch({
    type: 'ADD_MESSAGE',
    message: 'Hello %Username%!'
});
store.dispatch({
    type: 'ADD_MESSAGE',
    message: 'I\'ll BECOME REAL COOL PRO CALCULATOR SOON'
});

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