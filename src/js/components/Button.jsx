import React from "react";
import {connect} from "react-redux";


class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={"btn-cell " + this.props.style}>
            <button className={"btn waves-effect waves-light " + this.props.style}
                      onClick={(e)=>this.props.onInput(this.props.children)}>
                {this.props.children}
            </button>
        </div>
    }
}

function mapDispatchToProps (dispatch) {
    return {
        onInput: (val) => {
            dispatch({type: 'INPUT',
                value:val
            })
        }
    }
}
export default connect(null,mapDispatchToProps)(Button)