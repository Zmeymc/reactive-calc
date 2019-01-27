import React, {Fragment} from "react";
import connect from "react-redux/es/connect/connect";
import HistoryToggler from "./HistoryToggler.jsx";
import Loader from "./Loader.jsx";
import VerticalCentered from "./VerticalCentered.jsx";


class HistoryBlock extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return <Fragment>
            <div className="history fake"/>
        <div className={this.props.isOpened ? "history active" : "history"}>
            <HistoryToggler/>
            {this.props.isLoading ?
                <VerticalCentered>
                    <Loader/>
                </VerticalCentered>
                :
                <Fragment>
                    {
                        this.props.history.length === 0 &&
                        <VerticalCentered>
                            <span className={'hint'}>Нет вычислений</span>
                        </VerticalCentered>
                    }
                    <table className={"striped"}>
                        <tbody>
                        {this.props.history.slice().reverse().map((h, i) => (<tr key={i}>
                            <td className="history-item">{h}</td>
                        </tr>))}
                        </tbody>
                    </table>
                </Fragment>
            }
        </div>
        </Fragment>
    }
}


function mapStateToProps(state) {
    return {
        history: state.history.values,
        isOpened: state.history.isOpened,
        isLoading: state.loading.length > 0
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