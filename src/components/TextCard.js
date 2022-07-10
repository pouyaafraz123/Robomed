import React from "react";

class TextCard extends React.Component {
    render() {

        return (
            <div className={`card card--${this.props.theme}`}>
                <div className={"card__top"}></div>
                <div className={"card__body"}>
                    <h6 className={"card__title"}><strong>{this.props.title} </strong><i
                        className={`flag flag-${this.props.flag}`}></i></h6>
                    <p className={"card__text"}>{this.props.text}</p>
                    <a href="src/components/TextCard#" className={"card__badge"}>
                        <strong>
                            <span>&bull; </span>
                            {this.props.badge}
                        </strong>
                    </a>
                </div>
            </div>
        );
    }
}

export default TextCard;