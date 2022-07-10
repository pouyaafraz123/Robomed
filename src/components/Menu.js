import React from "react";

class Menu extends React.Component{
    render() {
        return (
            <div className={"menu"}>
                {this.renderMenuItems(this.props.items)}
            </div>
        );
    }

    renderMenuItems(items) {
        return items.map((item)=>{
            return <li className={"menu__item"} key={item}><a href="#">{item}</a></li>
        })
    }
}

export default Menu;