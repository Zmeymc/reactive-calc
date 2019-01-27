import React from "react";
import {connect} from "react-redux";


export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={"btn-cell " + this.props.style}>
            <button className={"btn waves-effect waves-light " + this.props.style}
                      onClick={()=>this.props.onClick()}>
                {this.props.children}
            </button>
        </div>
    }
}
