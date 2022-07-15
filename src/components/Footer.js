import React from "react";
import Back from "./Back";
import Inside from "./Inside";
import styled from "styled-components";

class Footer extends React.Component {
  render() {
    return (
        <Back className={"my-footer container-fluid mx-auto"}>
          <Inside className={"my-footer-inside mx-auto"}>
            <div className="row" style={{padding: 0}}>
              <div className="col-lg-6 col-12">
                <div
                    className="card border-0"
                    style={{margin: "80px 70px", backgroundColor: "transparent"}}
                >
                  <div className="card-header bg-transparent border-0">
                    <h1>
                      <strong>RoboMed</strong>
                    </h1>
                  </div>
                  <div className="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aliquam consectetur debitis in incidunt magnam magni maxime
                      minus mollitia numquam, officia porro similique, vero!
                      Delectus mollitia non quaerat tempora temporibus
                      voluptatibus.
                    </p>
                  </div>
                  <div className="card-footer bg-transparent border-0 d-flex justify-content-start social-Media">
                  <img style={{width: '70px'}} className="img-fluid" src={require("../img/icon1.png")} alt="icon" />
                  <img style={{width: '70px'}} className="img-fluid" src={require("../img/icon2.png")} alt="icon" />
                  <img style={{width: '70px'}} className="img-fluid" src={require("../img/icon3.png")} alt="icon" />
                  <img style={{width: '70px'}} className="img-fluid" src={require("../img/icon4.png")} alt="icon" />
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-12 space-between"></div>
            <div className="col-lg-5 col-12">
              <div className="card border-0 contact" style={{ margin: "170px 70px", backgroundColor: "transparent" }}>
                <div className="d-flex flex-row">
                  <img style={{width: '25px'}} className="img-fluid" src={require("../img/icon5.png")} alt={"icon"} />
                  <div className="pl-3">(330) 718 - 8699</div>
                </div>
                <div className="d-flex flex-row" style={{marginTop: '45px' , marginBottom: '45px'}}>
                  <img style={{width: '25px'}} className="img-fluid" src={require("../img/icon6.png")} alt={"icon"}/>
                  <div className="pl-3" style={{textDecoration: 'underline'}}>HospitalAdmin@gmail.com</div>
                </div>
                <div className="d-flex flex-row">
                  <img style={{height: '35px'}} className="img-fluid" src={require("../img/icon7.png")} alt={"icon"}/>
                  <div className="pl-3">Keas 69 Str. 15234, Chalandri Athens, Greece</div>
                </div>
              </div>
            </div>
            </div>
            <Line/>
            <div className="pb-5 px-5">
              ©2022 Global Access Telehealth. All Rights Reserved.Privacy Policy
            </div>
          </Inside>
        </Back>
    );
  }
}

const Line = styled.hr`
  border-color: var(--line);
`;

export default Footer;
