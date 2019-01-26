import React from "react";
import connect from "react-redux/es/connect/connect";


class HistoryBlock extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        console.log('HB rendered')
        const {historyIsOpened} = this.props;
        return <div className={'history'}>

        </div>
    }
}


function mapStateToProps (state) {
    return {
        historyIsOpened: state.historyIsOpened
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleHistory: () => {
            dispatch({type: 'TOGGLE_HISTORY' })
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(HistoryBlock)