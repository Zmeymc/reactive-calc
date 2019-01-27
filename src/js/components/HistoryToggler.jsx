import React from "react";
import {connect} from "react-redux";


class HistoryToggler extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return <a className={'btn-small waves-effect waves-light toggle_history'}  onClick={() => this.props.onToggleHistory()}>
        <div className={this.props.isOpened ? 'toggle_icon opened' : 'toggle_icon'}>
            <div className={'stick left'}/>
            <div className={'stick right'}/>
        </div>
        </a>
    }
}


function mapStateToProps(state) {
    return {
        isOpened: state.history.isOpened
    }
}


function mapDispatchToProps(dispatch) {
    return {
        onToggleHistory: () => {
            dispatch({type: 'TOGGLE_HISTORY'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryToggler)