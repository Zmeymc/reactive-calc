import React from "react";

export default class Loader extends React.Component{
    render() {
        return <div className="preloader-wrapper big active">
            <div className="spinner-layer">
                <div className="circle-clipper left">
                    <div className="circle"/>
                </div>
                <div className="gap-patch">
                    <div className="circle"/>
                </div>
                <div className="circle-clipper right">
                    <div className="circle"/>
                </div>
            </div>
        </div>
    }

}