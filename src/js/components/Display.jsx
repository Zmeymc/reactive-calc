import React, {} from "react";
import {store} from "../index.jsx";
import fitty from "fitty";


export default class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '0'
        }
    }

    componentDidMount(){
        this.setValue('0');
        store.subscribe(() => {
            const state = store.getState();
            this.setValue(state.get('expression'));
        });
    }

    setValue(value){
        this.setState({value});
        fitty('#calcValue',{ maxSize: 50}).forEach(f=>f.fit());

    }


    render() {
        return <div className='row display'>
                    <h2 id='calcValue' className='display-text'>{this.state.value}</h2>
        </div>
    }
}