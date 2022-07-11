import React from "react";
import ImageCard from "./ImageCard";

class ImageCardContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderCardItems()}</div>
      </div>
    );
  }

  renderCardItems() {
    const items = [1, 2, 3, 4, 5, 6];

    return items.map((item) => {
      return (
        <ImageCard
          img={`img${item}`}
          name={"Dr. Johnaton Leo"}
          text={"Orthopedis"}
          key={item}
        />
      );
    });
  }
}

export default ImageCardContainer;
