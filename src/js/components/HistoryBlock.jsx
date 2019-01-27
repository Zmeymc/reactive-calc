import React, {Fragment} from "react";
import connect from "react-redux/es/connect/connect";
import HistoryToggler from "./HistoryToggler.jsx";


class HistoryBlock extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return <Fragment>
            <div className="history fake"/>
        <div className={this.props.isOpened ? "history active" : "history"}>
            <HistoryToggler/>
            {this.props.history.length === 0 &&
                <span className={'hint'}>Нет вычислений</span>}
            <table className={"striped"}>
                <tbody>
                {this.props.history.slice().reverse().map((h,i) => (<tr key={i}><td className="history-item">{h}</td></tr>))}
                </tbody>
            </table>
        </div>
        </Fragment>
    }
}


function mapStateToProps(state) {
    return {
        history: state.history.values,
        isOpened: state.history.isOpened
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleHistory: () => {
            dispatch({type: 'TOGGLE_HISTORY'})
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(HistoryBlock)