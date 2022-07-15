import React from "react";
import ThemeContext from "../context/ThemeContext";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

class ToggleButton extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({toggleTheme }) => (
          <button
            className="btn rounded-circle shadow-lg"
            onClick={() => toggleTheme()}
          >
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ width: "15px", height: "20px" }}
            >
              <DarkModeOutlinedIcon />
            </div>
          </button>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default ToggleButton;
