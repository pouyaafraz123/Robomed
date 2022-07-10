import React from "react";

class ImageCard extends React.Component {
    render() {
        return (
            <div className={"image-card"}>
                <img className={"image-card__image"} src={require(`../img/${this.props.img}.png`)} alt={"doctor"}/>
                <h5 className={"image-card__primary-text"}>{this.props.name}</h5>
                <h6 className={"image-card__primary-text"}>{this.props.text}</h6>
            </div>
        );
    }
}

export default ImageCard;