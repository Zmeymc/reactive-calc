import React, {} from "react";
import fitty from "fitty";
import {connect} from "react-redux";


class Display extends React.Component {
    constructor(props) {
        super(props);
    }


    fit() {
        fitty('#calcValue', {maxSize: 50}).forEach(f => f.fit());
    }


    render() {
        return <div className='row display'>
            <h2 id='calcValue' className='display-text'>{this.props.expression}</h2>
        </div>
    }

    componentDidUpdate() {
        this.fit();
    }
}

function mapStateToProps (state) {
    return {
        expression: state.expression.value
    }
}



export default connect(mapStateToProps)(Display)