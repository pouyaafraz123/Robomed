import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className={"header my-header"} style={{margin: "10px 45px"}}>
        <div className={"header__inside"}>
          <div className={"header__content row responsive-heading"}>
            <div className="col-lg-7 col-12">
              <div className="card border-0" style={{margin: '40px 50px', backgroundColor: "transparent"}}>
                <div className="card-header bg-transparent border-bottom-0">
                  <h1 className={"header__title"} style={{fontSize: '60px'}}>{this.props.title}</h1>
                </div>
                <div className="card-body">
                  <p className={"header__text"} style={{wordSpacing: '7px'}}>{this.props.text}</p>
                </div>
                <div className="card-footer bg-transparent border-top-0">
                  <button className={"header__btn btn primary-btn"}>
                    Login to System
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12 mt-3">
              <div className={"header__img"}>
                <img className="img-fluid" src={require("../img/Main Picture.png")} alt={"logo"} />
              </div>
            </div>
          </div>
          <div className={"header__detail row mt-3"} style={{paddingRight: '25%' , paddingLeft: '20%'}}>
            {this.renderDetail(this.props.details)}
          </div>
        </div>
      </header>
    );
  }

  renderDetail(details) {
    return details.map((detail) => {
      return (
        <div key={detail.num}
             className={"header__detail col-lg-4 col-12 pb-5 mb-5 d-flex flex-column justify-content-between align-items-center"}>
          <div className={"header__detail-number"}>
            <strong style={{fontSize: '50px', fontWeight: '500'}}>+{detail.num}</strong>
          </div>
          <div className={"header__detail-text"}>
            <span className="text-muted"><strong>{detail.text}</strong></span>
          </div>
        </div>
      );
    });
  }
}

export default Header;
