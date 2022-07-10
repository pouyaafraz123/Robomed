import React from "react";
import TextCard from "./TextCard";

class TextCardContainer extends React.Component {
    render() {
        return (
            <div className={"text-card-container"}>
                {this.renderCards()}
            </div>
        );
    }

    renderCards() {
        const cardItems = [
            {
                theme: "blue",
                title: "Mankind Medicare",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" +
                    " labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit. Morbi",
                flag: "france",
                badge: "Hospital",
                key: 1
            },
            {
                theme: "yellow",
                title: "Mankind Medicare",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" +
                    " labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit. Morbi",
                flag: "france",
                badge: "Hospital",
                key: 2
            },
            {
                theme: "blue",
                title: "Mankind Medicare",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" +
                    " labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit. Morbi",
                flag: "france",
                badge: "Hospital",
                key: 3
            },
            {
                theme: "yellow",
                title: "Mankind Medicare",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut" +
                    " labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing elit. Morbi",
                flag: "france",
                badge: "Hospital",
                key: 4
            }
        ];

        return cardItems.map(item => {
            const {theme, title, text, flag, badge, badgeBackColor, badgeColor, key} = item;
            return (
                <TextCard
                    theme={theme}
                    title={title}
                    text={text}
                    flag={flag}
                    badge={badge}
                    key={key}
                />
            );
        })
    }
}

export default TextCardContainer;