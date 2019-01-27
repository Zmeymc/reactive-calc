import * as React from "react";

export default class VerticalCentered extends React.Component{
    render(){
        return <div className="vc-outer">
            <div className="vc-middle">
                <div className="vc-inner">
                    {this.props.children}
                </div>
            </div>
        </div>
}


}