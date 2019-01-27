import React from "react";
import {calculator} from "../index.jsx";
import Button from "./Button.jsx";

export default class ButtonBlock extends React.Component {
    constructor(props) {
        super(props);
        document.onkeydown = (key)=>this.input(key.key === 'Enter'? '=':key.key);
    }

    input(symbol){
        calculator.input(symbol);
    }


    render() {
        return <div className='button-block'>
        {this.props.buttons.map((row)=>
            (<div className='row' key={row.map(b => b.value).join('')}> {
                    row.map(b => (
                            <Button
                                key={b.value}
                                style={b.style}
                                onClick={()=>this.input(b.value)}>
                                {b.value}
                            </Button>
                        ))}
                </div>))
                }
         </div>
        }
}
