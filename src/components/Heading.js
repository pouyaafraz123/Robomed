import React from "react";

class Heading extends React.Component {
  render() {
    return (
      <div
        className="heading container-fluid text-center"
        style={{ marginTop: "140px", marginBottom: '80px'}}
      >
        <h6 className={"heading__small"} style={{ color: "#29A9E1"}}><b>{this.props.smallTitle}</b></h6>
        <h3 className={"heading__big"} style={{ fontWeight: 350}}><strong>{this.props.bigTitle}</strong></h3>
      </div>
    );
  }
}

export default Heading;
