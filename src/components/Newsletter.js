import React from "react";

class Newsletter extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5 pt-5 Newsletter">
          <div className="col-lg-5 col-12">
            <h6 style={{color: '#29A9E1'}}>Newsletter Subscribe</h6>
            <h3><strong>To Get More News Subscribe Us</strong></h3>
          </div>
          <div className="col-lg-1 col-12"></div>
          <div className="col-lg-5 col-12 d-flex flex-row justify-content-start align-items-center">
            <div className="input-group">
              <div className="input-group-prepend border-right-0">
                <div className="input-group-text border-right-0" style={{backgroundColor: '#f8f8f8'}}>
                  <img
                    src={require("../img/email.png")}
                    className=""
                    style={{ width: "25px" }}
                  />
                </div>
              </div>
              <input
                className="form-control border-left-0"
                type={"text"}
                placeholder={"Email Address"}
              />
            </div>
            <button className="btn btn-info px-4">Subscribe</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsletter;
