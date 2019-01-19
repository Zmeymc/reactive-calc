import React from "react";
import {store} from "../index.jsx";

export default class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isLoading:false
        }
    }

    componentDidMount(){
        store.subscribe(() => {
            const state = store.getState();
            this.setState({isLoading:state.get('isLoading')});
        });
    }


    render(){
        const {isLoading} = this.state;
        console.log(isLoading);
        return <div className="progress">
            <div className={isLoading?"indeterminate":"determinate"}
                 style={{width: '0%'}}/>
        </div>
    }


}