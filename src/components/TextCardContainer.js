import React from "react";
import TextCard from "./TextCard";

class TextCardContainer extends React.Component {
  render() {
    return (
      <div className="text-card-container row container-fluid d-flex justify-content-center align-items-center">
        {this.renderCards()}
      </div>
    );
  }

  renderCards() {
    const cardItems = [
      {
        theme: "blue",
        title: "Mankind Medicare",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
        flag: "france",
        badge: "Hospital",
        key: 1,
      },
      {
        theme: "yellow",
        title: "Mankind Medicare",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
        flag: "france",
        badge: "Hospital",
        key: 2,
      },
      {
        theme: "blue",
        title: "Mankind Medicare",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
        flag: "france",
        badge: "Hospital",
        key: 3,
      },
      {
        theme: "yellow",
        title: "Mankind Medicare",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
        flag: "france",
        badge: "Hospital",
        key: 4,
      },
    ];

    return cardItems.map((item) => {
      const {
        theme,
        title,
        text,
        flag,
        badge,
        badgeBackColor,
        badgeColor,
        key,
      } = item;
      return (
        <div className="col-lg-3 col-12 mb-3">
          <TextCard
            theme={theme}
            title={title}
            text={text}
            flag={flag}
            badge={badge}
            key={key}
          />
        </div>
      );
    });
  }
}

export default TextCardContainer;
