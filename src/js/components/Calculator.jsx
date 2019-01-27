import React from "react";
import * as Constants from "../logic/constants";
import ButtonBlock from "./ButtonBlock.jsx";
import Display from "./Display.jsx";
import HistoryBlock from "./HistoryBlock.jsx";
import {connect} from "react-redux";

class Calculator extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.onGetHistory();
    }

    render() {
        return <div className='card'>
            <Display/>
            <ButtonBlock
                buttons={Constants.ButtonDefinitions}
            />
            <HistoryBlock/>
        </div>
    }
}


function mapDispatchToProps(dispatch) {
    return {
        onGetHistory: () => {
            dispatch({type: 'LOAD_HISTORY'})
        }
    }
}
export default connect(null, mapDispatchToProps)(Calculator)