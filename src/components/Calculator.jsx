import React, {Fragment} from "react";

import {store} from "../index.jsx";

export default class Calculator extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return <Fragment>
            {store.getState().toJS()
                .messages.map((message) =>
                <h1>{message}</h1>)}
            </Fragment>
    }
}