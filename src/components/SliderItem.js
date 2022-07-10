import React from "react";

class SliderItem extends React.Component {
  render() {
    return (
      <div className="slideritem d-flex flex-row">
        <div>
          <img className="img-fluid" src={require(`../img/${this.props.img}.png`)} alt={"person"} />
        </div>
        <div className="pl-5 pt-2 d-flex flex-column justify-content-around">
          <p className="text-muted">{this.props.text}</p>
          <h2><strong>{this.props.name}</strong></h2>
        </div>
      </div>
    );
  }
}

export default SliderItem;
