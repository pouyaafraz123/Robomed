import React from "react";

class SliderItem extends React.Component{
    render() {
        return (
            <div>
                <img src={require(`../img/${this.props.img}.png`)} alt={"person"}/>
                <div>{this.props.name}</div>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default SliderItem;