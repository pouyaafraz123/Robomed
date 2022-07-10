import React from "react";
import ImageCard from "./ImageCard";

class ImageCardContainer extends React.Component {
    render() {
        return (
            <div>
                {this.renderCardItems()}
            </div>
        );
    }

    renderCardItems() {
        const items = [
            1,2,3,4,5,6
        ];

        return items.map(item=>{
            return <ImageCard img={`img${item}`} name={"Dr. Johnaton Leo"} text={"Orthopedis"} key={item}/>
        })

    }
}

export default ImageCardContainer;