import React from "react";

class Logo extends React.Component {
  render() {
    return (
      <div className={"logo"}>
        <img
          src={require(`../img/Logo.png`)}
          alt="logo"
          className={"logo__img"}
          style={{ width: "100px" }}
        />
      </div>
    );
  }
}

export default Logo;
