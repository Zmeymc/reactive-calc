import React from "react";


export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <a className={"btn-large waves-effect waves-light " + this.props.style} onClick={(e)=>this.props.operation(e)}>{this.props.children}</a>
    }
}