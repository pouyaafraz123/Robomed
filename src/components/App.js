import React from "react";
import TopBar from "./TopBar";
import Header from "./Header";
import "../sass/main.css";
import Heading from "./Heading";
import TextCardContainer from "./TextCardContainer";
import Slider from "./Slider";
import ImageCardContainer from "./ImageCardContainer";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import ThemeContext from "../context/ThemeContext";
import Themes from "./Themes";
import CSSVariables from "./CSSVariables";
import styled from "styled-components";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === Themes.dark
                        ? Themes.light
                        : Themes.dark,
            }));
        };
        this.state = {
            theme: Themes.dark,
            toggleTheme: this.toggleTheme,
        };
    }

    render() {
        const headerTitle = "Your Health Is Our top Priority";
        const headerText =
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda debitis earum est " +
            "explicabo fuga id minus neque, nihil nobis odio sequi sit ut vel vero! Aperiam debitis labore voluptate?";
        const headerDetails = [
            {
                num: 216,
                text: "Healthcare Facility",
            },
            {
                num: 423,
                text: "Professional Doctor",
            },
            {
                num: 669,
                text: "Staff all around the world",
            },
        ];

        const smallHeading1 = "Healthcare Facilities";
        const bigHeading1 = "Our Last Healthcare Facilities";
        const smallHeading2 = "testimonial";
        const bigHeading2 = "Patients Says About Us";
        const smallHeading3 = "Team Doctor";
        const bigHeading3 = "Meet Our Specialist";
        return (
            <ThemeContext.Provider value={this.state}>
                <CSSVariables
                    primaryColor={this.state.theme.primaryBackColor}
                    color={this.state.theme.primaryColor}
                    blackBadge={this.state.theme.blackBadge}
                    blueBadge={this.state.theme.blueBadge}
                    blackBadgeColor={this.state.theme.blackBadgeColor}
                    blueBadgeColor={this.state.theme.blueBadgeColor}
                    pColor={this.state.theme.pColor}
                    btnColor={this.state.theme.btnColor}
                    newsletter={this.state.theme.newsletter}
                    newsletterColor={this.state.theme.newsletterColor}
                    gradientStart={this.state.theme.gradientStart}
                    inside={this.state.theme.inside}
                    cardBack={this.state.theme.cardBack}
                    line={this.state.theme.line}
                >
                    <Body>
                        <div className="container-fluid">
                            <div className="pt-3">
                                <TopBar/>
                            </div>
                        </div>
                        <div className={"container-fluid"}>
                            <Header
                                title={headerTitle}
                                text={headerText}
                                details={headerDetails}
                            />

                            <Heading smallTitle={smallHeading1} bigTitle={bigHeading1}/>
                            <TextCardContainer/>

                            <Heading smallTitle={smallHeading2} bigTitle={bigHeading2}/>
                            <Slider/>

                            <Heading smallTitle={smallHeading3} bigTitle={bigHeading3}/>
                            <ImageCardContainer/>

                            <Newsletter/>

                            <FooterContainer className={"mx-lg-4 pb-5 px-4"}>
                                <Footer/>
                            </FooterContainer>
                        </div>
                    </Body>
                </CSSVariables>
            </ThemeContext.Provider>
        );
    }
}

const FooterContainer = styled.div`
  background: var(--primary-back-color);
`;

const Body = styled.div`
  background: var(--primary-back-color);
  color: var(--primary-color);
`;


export default App;
