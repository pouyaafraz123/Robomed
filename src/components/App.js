import React from "react";
import TopBar from "./TopBar";
import Header from "./Header";
import "../sass/main.css";
import Heading from "./Heading";
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

    const smallHeading1="Healthcare Facilities";
    const bigHeading1="Our Last Healthcare ";

    return (
        <div>
            <TopBar/>
            <Header title={headerTitle} text={headerText} details={headerDetails}/>
            <Heading smallTitle={smallHeading1} bigTitle={bigHeading1}/>
        </div>

    );
}

export default App;