import React from "react";
import ThemeContext from "../context/ThemeContext";

class Logo extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {({theme}) => (
                    <div className={"logo"}>
                        <img
                            src={require(`../img/Logo${theme.img}.png`)}
                            alt="logo"
                            className={"logo__img"}
                            style={{width: `100px`, padding: `${theme.img === "" ? "0px" : "15px"}`}}
                        />
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default Logo;
