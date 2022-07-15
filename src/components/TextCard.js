import React from "react";
import Paragraph from "./Paragraph";
import styled from "styled-components";

class TextCard extends React.Component {
    render() {

        return (
            <div className={`cardtext cardtext--${this.props.theme}`}>
                <div className={"cardtext__top"}></div>
                <div className={"cardtext__body"}>
                    <h6 className={"cardtext__title"}><strong>{this.props.title}&nbsp;</strong>&#127467;&#127479;</h6>
                    <Paragraph className={"cardtext__text"}>{this.props.text}</Paragraph>
                    <Badge theme={this.props.theme} href="src/components/TextCard#" className={"cardtext__badge"}>
                        <strong>
                            <span>&bull; </span>
                            {this.props.badge}
                        </strong>
                    </Badge>
                </div>
            </div>
        );
    }
}

const Badge = styled.a`
  background: ${props => props.theme === "blue" ? "var(--blue-badge)" : "var(--black-badge)"};
  color: ${props => props.theme === "blue" ? "var(--blue-badge-color)" : "var(--black-badge-color)"};
`;

export default TextCard;