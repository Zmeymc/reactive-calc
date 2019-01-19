import React, {Fragment} from "react";
import Button from "./Button.jsx";

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
    }

    input(symbol){
        console.log(symbol)
    }

    render() {
        return <Fragment>
                {
                    Array.apply(null, {length: 10})
                        .map(Number.call, Number).map((Number) =>
                            <Button operation={() => this.input(Number)}>
                                {Number}
                            </Button>
                        )}
        </Fragment>
    }
}