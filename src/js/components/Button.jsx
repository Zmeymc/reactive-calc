import React from "react";
import {connect} from "react-redux";


class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <a className={"btn-large waves-effect waves-light " + this.props.style}
                  onClick={(e)=>this.props.onInput(this.props.children)}>
            {this.props.children}
        </a>
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
};


export default connect(null,mapDispatchToProps)(Button)