import React from "react";
import connect from "react-redux/es/connect/connect";


class HistoryBlock extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return <ul className="history">
            {this.props.history.reverse().map(h=>( <li className="history-item" key={h}>{h}</li>))}
            </ul>
    }
}


function mapStateToProps (state) {
    return {
        history: state.history.values
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleHistory: () => {
            dispatch({type: 'TOGGLE_HISTORY' })
        }
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(HistoryBlock)