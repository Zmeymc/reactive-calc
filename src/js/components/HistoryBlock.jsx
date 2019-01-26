import React from "react";
import connect from "react-redux/es/connect/connect";


class HistoryBlock extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return <div className={'history'}>
            this.props.history.map(h=><h2 key={h}>h</h2>)
        </div>
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