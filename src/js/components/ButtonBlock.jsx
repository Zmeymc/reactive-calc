import React, {Fragment} from "react";
import Button from "./Button.jsx";
import {store} from "../index.jsx";


export default class ButtonBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    input(symbol){
        console.log(symbol);
        store.dispatch({
            type: 'SET_LOADING',
            value: symbol % 2
        });
    }

    render() {
        return <Fragment>

        {this.props.buttons.map((row)=>
            (<Fragment key={row.map(b => b.value).join('')}> {
                    row.map(b => (
                            <Button
                                key={b.value}
                                style={b.style}
                                operation={() => this.input(b.value)}>
                                {b.value}
                            </Button>
                        ))}
                    <br/>
                </Fragment>))
                }
         </Fragment>
        }
}