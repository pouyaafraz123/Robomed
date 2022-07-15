import React from "react";
import styled from "styled-components";

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
                <InputGroup className="input-group-text border-right-0">
                  <img
                      src={require("../img/email.png")}
                      className=""
                      style={{width: "25px"}}
                  />
                </InputGroup>
              </div>
              <Input
                  className="form-control border-left-0"
                  type={"text"}
                  placeholder={"Email Address"}
              />
            </div>
            <BlueButton className="btn btn-info px-4">Subscribe</BlueButton>
          </div>
        </div>
      </div>
    );
  }
}

const BlueButton = styled.button`
  color: var(--blue-button-color);
`;

const Input = styled.input`
  background: var(--newsletter);
  color: var(--newsletter-color);
  &:focus{
    background: var(--newsletter);
    color: var(--newsletter-color);
  }
  &::placeholder{
    color: var(--newsletter-color);
  }
`;

const InputGroup = styled.div`
  background: var(--newsletter);
  color: var(--newsletter-color);
`;
export default Newsletter;
