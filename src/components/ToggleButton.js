import React from "react";
import ThemeContext from "../context/ThemeContext";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Themes from "./Themes";
import styled from "styled-components";

class ToggleButton extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {({theme, toggleTheme}) => (
                    <Btn
                        className="btn rounded-circle"
                        onClick={() => toggleTheme()}
                    >
                        <div
                            className="d-flex justify-content-center align-items-center"
                            style={{width: "25px", height: "25px"}}
                        >
                            {this.renderIcon(theme)}
                        </div>
                    </Btn>
                )}
            </ThemeContext.Consumer>
        );
    }

    renderIcon(theme) {
        if (theme === Themes.light) {
            return <DarkModeOutlinedIcon fontSize={"large"}/>
        } else {
            return <LightModeOutlinedIcon fontSize={"large"} color={"primary"}/>
        }
    }
}

const Btn = styled.button`
  box-shadow: 5px 10px 40px rgba(0, 0, 0, .3) !important;
  padding: 15px;
`;

export default ToggleButton;
