import React, {Fragment} from "react";
import * as Constants from "../logic/constants";
import ButtonBlock from "./ButtonBlock.jsx";
import Display from "./Display.jsx";
import HistoryBlock from "./HistoryBlock.jsx";
import connect from "react-redux/es/connect/connect";
import HistoryToggler from "./HistoryToggler.jsx";

class Calculator extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <div className='card'>
            {this.props.historyIsOpened ?
                <Fragment>
                    <HistoryToggler/>
                    <HistoryBlock/>
                </Fragment>
                :
                <Fragment>
                    <Display/>
                    <ButtonBlock
                        buttons={Constants.ButtonDefinitions}
                    />
                    <HistoryToggler/>
                </Fragment>
            }
    </div>
    }
}


function mapStateToProps (state) {
    return {
        historyIsOpened: state.historyIsOpened
    }
}

export default connect(mapStateToProps)(Calculator)