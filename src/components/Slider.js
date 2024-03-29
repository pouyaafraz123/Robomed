import React from "react";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import SliderItem from "./SliderItem";
import Back from "./Back";

class Slider extends React.Component {
    render() {
        const items = [
            <SliderItem
                img={"person"}
                text={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
                    "incididunt ut labore et dolore magna aliqua Egest in nisl"
                }
                name={"Roberta Fitzgerald"}
            />,
            <SliderItem
                img={"person"}
                text={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
                    "incididunt ut labore et dolore magna aliqua Egest in nisl"
                }
                name={"Roberta Fitzgerald"}
            />,
            <SliderItem
                img={"person"}
                text={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
                    "incididunt ut labore et dolore magna aliqua Egest in nisl"
                }
                name={"Roberta Fitzgerald"}
            />,
            <SliderItem
                img={"person"}
                text={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
                    "incididunt ut labore et dolore magna aliqua Egest in nisl"
                }
                name={"Roberta Fitzgerald"}
            />,
            <SliderItem
                img={"person"}
                text={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
                    "incididunt ut labore et dolore magna aliqua Egest in nisl"
                }
                name={"Roberta Fitzgerald"}
            />,
            <SliderItem
                img={"person"}
                text={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
                    "incididunt ut labore et dolore magna aliqua Egest in nisl"
                }
                name={"Roberta Fitzgerald"}
            />,
        ];

        return (
            <Back className="container slider p-5">

                <AliceCarousel
                    mouseTracking
                    items={items}
                    autoPlay
                    autoPlayInterval={3000}
                    autoPlayStrategy={"all"}
                    animationDuration={1000}
                    disableButtonsControls
                    infinite
                />

            </Back>
        );
    }
}

export default Slider;