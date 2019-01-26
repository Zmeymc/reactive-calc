import React from "react";
import {connect} from "react-redux";



class HistoryToggler extends React.Component {
    constructor(props) {
        super(props);

    }

    toggle(){
        this.props.dispatch({
            type: 'TOGGLE_HISTORY'
        });
    }

    render() {
        return <div className={'row ' + (this.props.isOpened ? 'active':'')}>
            <a className={"btn-small waves-effect waves-light toggle_history"}
               onClick={()=>this.props.onToggleHistory()}>
                <i className='material-icons dp48'>{this.props.isOpened?'expand_more':'expand_less'}</i>
            </a>
        </div>
    }
}


function mapStateToProps (state) {
    return {
        isOpened: state.history.isOpened
    }
}


function mapDispatchToProps (dispatch) {
    return {
        onToggleHistory: () => {
            dispatch({type: 'TOGGLE_HISTORY'})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HistoryToggler)