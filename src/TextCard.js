import React from "react";

class TextCard extends React.Component {
    render() {
        const badgeStyle={
            ':link&:visited':{
            backgroundColor:this.props.badgeBackColor,
            padding:"5px",
            color: this.props.badgeColor}
        };
        return (
            <div className={"card"}>
                <div className={"card__top"} style={{backgroundColor:this.props.topColor}}></div>
                <h6 className={"card__title"}>{this.props.title}&nbsc;{this.props.flag}</h6>
                <p className={"card__text"}>{this.props.text}</p>
                <a href="#" className={"card__badge"} style={badgeStyle}>&bull;&nbsc;{this.props}</a>
            </div>
        );
    }
}

export default TextCard;