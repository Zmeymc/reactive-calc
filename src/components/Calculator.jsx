import React, {Fragment} from "react";

import ButtonBlock from "./ButtonBlock.jsx";
import Display from "./Display.jsx";
import Loader from "./Loader.jsx";

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.buttons = [
            [
                {
                    style:'c-operation',
                    value:'AC'
                },
                {
                    style:'c-operation',
                    value:'+/-'
                },
                {
                    style:'c-operation',
                    value:'%'
                },
                {
                    style:'b-operation',
                    value:'÷'
                }
            ],
            [
                {
                    style:'number',
                    value:'7'
                },
                {
                    style:'number',
                    value:'8'
                },
                {
                    style:'number',
                    value:'9'
                },
                {
                    style:'b-operation',
                    value:'X'
                }
            ],
            [
                {
                    style:'number',
                    value:'4'
                },
                {
                    style:'number',
                    value:'5'
                },
                {
                    style:'number',
                    value:'6'
                },
                {
                    style:'b-operation',
                    value:'-'
                }
            ],
            [
                {
                    style:'number',
                    value:'1'
                },
                {
                    style:'number',
                    value:'2'
                },
                {
                    style:'number',
                    value:'3'
                },
                {
                    style:'b-operation',
                    value:'+'
                }
            ],
            [
                {
                    style:'number double-width',
                    value:'0'
                },
                {
                    style:'number',
                    value:','
                },
                {
                    style:'b-operation',
                    value:'='
                }
            ]
        ];
    }


    render() {
        return <div className='card'>
            <Display/>
            <Loader/>
            <ButtonBlock
                buttons={this.buttons}
        />
    </div>
    }
}
