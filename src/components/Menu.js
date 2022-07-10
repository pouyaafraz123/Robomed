import React from "react";

class Menu extends React.Component {
  state = { activeItem: "Home" };
  render() {
    return <>{this.renderMenuItems(this.props.items)}</>;
  }

  renderMenuItems(items) {
    return items.map((item) => {
      return (
        <li className={`menu__item nav-item px-4`} key={item} onClick={()=>this.setState({ activeItem: item })}>
          <a
            className={`nav-link  ${
              item === this.state.activeItem ? "customActive" : ""
            }`}
            href="#"
          >
            <strong>{item}</strong>
          </a>
        </li>
      );
    });
  }
}

export default Menu;
