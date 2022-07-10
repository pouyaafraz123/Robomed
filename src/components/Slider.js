import React from "react";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import SliderItem from "./SliderItem";

class Slider extends React.Component {
    render() {
        const items = [
            <SliderItem
                img={"person"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
                    "incididunt ut labore et dolore magna aliqua Egest in nisl"}
                name={"Roberta Fitzgerald"}/>,
            <div className="item" data-value="2" style={{backgroundColor:"rebeccapurple"}}>2</div>,
            <div className="item" data-value="3" style={{backgroundColor:"aqua"}}>3</div>,
        ];

        return (
            <div>
                <AliceCarousel
                    mouseTracking
                    items={items}
                    autoPlay
                    autoPlayInterval={1000}
                    autoPlayStrategy={"all"}
                    animationDuration={1000}
                    disableButtonsControls
                    infinite
                />
            </div>
        );
    }
}

export default Slider;