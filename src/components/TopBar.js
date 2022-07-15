import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import ThemeContext from "../context/ThemeContext";
import Themes from "./Themes";
import ThemeSwitcher from "./ToggleButton";

class TopBar extends React.Component {
  render() {
    const menuItems = ["Home", "Registration Form", "About", "Service", "FAQ"];
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <nav
            className={`navbar navbar-expand-lg bg-transparent navbar-${
              theme === Themes.light ? "light" : "dark"
            } d-flex justify-content-between align-content-center`}
          >
            <div className="responsive-logo">
              <a className="navbar-brand" href="#">
                <div className="d-flex flex-row align-items-center justify-content-start Logo-Bar">
                  <div className="d-flex flex-row align-items-center justify-content-between">
                    <Logo />
                    <ThemeSwitcher />
                  </div>
                  <h4 className={"logo__title pl-lg-5"}>RoboMed</h4>
                </div>
              </a>
            </div>
            <ul className="navbar-nav">
              <Menu items={menuItems} />
            </ul>
          </nav>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default TopBar;
