import React from "react";

class ImageCard extends React.Component {
  render() {
    return (
      <>
        <div className="image-card col-lg-3 col-md-6 col-12 mb-3 p-3 mx-3 shadow shadow-lg border-0 doctors mx-auto">
          <div className="card-header border-bottom-0">
            <img
              className="image-card__image img-fluid"
              src={require(`../img/${this.props.img}.png`)}
              alt={"doctor"}
            />
          </div>
          <div className="card-body text-center">
            <h5 className={"image-card__primary-text pt-3"}>
              <strong>{this.props.name}</strong>
            </h5>
            <h6
              style={{ color: "#29A9E1" }}
              className={"image-card__primary-text pt-2"}
            >
              <strong>{this.props.text}</strong>
            </h6>
          </div>
            </div>
        {this.props.key % 3 !== 2 ? <div className="col-lg-1 col-12 mx-auto"></div> : ""}
      </>
    );
  }
}

export default ImageCard;
