import React from "react";

class TextCard extends React.Component {
    render() {

        return (
            <div className={`cardtext cardtext--${this.props.theme}`}>
                <div className={"cardtext__top"}></div>
                <div className={"cardtext__body"}>
                    <h6 className={"cardtext__title"}><strong>{this.props.title} </strong><i
                        className={`flag flag-${this.props.flag}`}></i></h6>
                    <p className={"cardtext__text"}>{this.props.text}</p>
                    <a href="src/components/TextCard#" className={"cardtext__badge"}>
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