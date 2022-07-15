import React from "react";
import Paragraph from "./Paragraph";

class SliderItem extends React.Component {
  render() {
    return (
        <div className="slideritem d-flex flex-row" style={{background: "transparent"}}>
            <div>
                <img className="img-fluid" src={require(`../img/${this.props.img}.png`)} alt={"person"}/>
            </div>
            <div className="pl-5 pt-2 d-flex flex-column justify-content-around">
                <Paragraph>{this.props.text}</Paragraph>
                <h2><strong>{this.props.name}</strong></h2>
            </div>
        </div>
    );
  }
}

export default SliderItem;
