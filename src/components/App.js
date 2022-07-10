import React from "react";
import TopBar from "./TopBar";
import Header from "./Header";
import "../sass/main.css";
import Heading from "./Heading";
import "../sass/main.css";
import TextCardContainer from "./TextCardContainer";
import Slider from "./Slider";
import ImageCardContainer from "./ImageCardContainer";
import Footer from "./Footer";

const App = () => {
    const headerTitle = "Your Health Is Our top Priority";
    const headerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda debitis earum est " +
        "explicabo fuga id minus neque, nihil nobis odio sequi sit ut vel vero! Aperiam debitis labore voluptate?";
    const headerDetails = [
        {
            num: 216,
            text: "Healthcare Facility"
        },
        {
            num: 423,
            text: "Professional Doctor"
        },
        {
            num: 669,
            text: "Staff all around the world"
        }
    ];

    const smallHeading1 = "Healthcare Facilities";
    const bigHeading1 = "Our Last Healthcare Facilities";
    const smallHeading2 = "testimonial";
    const bigHeading2 = "Patients Says About Us";
    const smallHeading3 = "Team Doctor";
    const bigHeading3 = "Meet Our Specialist";

    return (
        <>
            <div className="container-fluid">
                <div className="mt-3">
                    <TopBar/>
                </div>
            </div>
            <div className={"container-fluid"}>
                <Header title={headerTitle} text={headerText} details={headerDetails}/>
            </div>
            <Heading smallTitle={smallHeading1} bigTitle={bigHeading1}/>
            <TextCardContainer/>
            <Heading smallTitle={smallHeading2} bigTitle={bigHeading2}/>
            <Slider/>
            <Heading smallTitle={smallHeading3} bigTitle={bigHeading3}/>
            <ImageCardContainer/>
            <Footer/>
        </>
    );
}

export default App;