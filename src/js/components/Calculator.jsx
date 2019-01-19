import React from "react";
import * as Constants from "../logic/constants";
import ButtonBlock from "./ButtonBlock.jsx";
import Display from "./Display.jsx";
import Loader from "./Loader.jsx";

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return <div className='card'>
            <Display/>
            <Loader/>
            <ButtonBlock
                buttons={Constants.ButtonDefinitions}
        />
    </div>
    }
}
