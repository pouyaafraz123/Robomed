import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";

class TopBar extends React.Component{
    render() {
        const menuItems = [
            "Home","Registration Form","About","Service","FAQ"
        ];
        return (
            <div>
                <Menu items={menuItems}/>
                <Logo/>
            </div>
        );
    }
}

export default TopBar;