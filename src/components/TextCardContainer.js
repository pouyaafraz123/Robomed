import React from "react";
import TextCard from "./TextCard";

class TextCardContainer extends React.Component {
  render() {
    return (
      <div className="text-card-container row container-fluid d-flex justify-content-between align-items-center"
           style={{margin: "auto 0"}}>
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
        badge: "Clinic",
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
        badge: "Clinic",
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
        key,
      } = item;
      return (
        <div className="col-lg-3 col-12 mb-3" key={key}>
          <TextCard
              theme={theme}
              title={title}
              text={text}
              flag={flag}
              badge={badge}

          />
        </div>
      );
    });
  }
}

export default TextCardContainer;
