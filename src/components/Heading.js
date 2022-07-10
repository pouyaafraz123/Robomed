import React from "react";

class Heading extends React.Component{
    render() {
        return (
            <div className={"heading"}>
                <h6 className={"heading__small"}>{this.props.smallTitle}</h6>
                <h3 className={"heading__big"}>{this.props.bigTitle}</h3>
            </div>
        );
    }
}

export default Heading;