import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div>
                <h1>RoboMed</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consectetur debitis in incidunt
                   magnam magni maxime minus mollitia numquam, officia porro similique, vero! Delectus mollitia non
                   quaerat tempora temporibus voluptatibus.</p>
                <div>
                    <div style={{backgroundColor: "#29A9E1"}}>
                        <img src={require("../img/icon1.png")} alt="icon"/>
                    </div>
                    <div style={{backgroundColor: "#29A9E1"}}>
                        <img src={require("../img/icon2.png")} alt="icon"/>
                    </div>
                    <div style={{backgroundColor: "#29A9E1"}}>
                        <img src={require("../img/icon3.png")} alt="icon"/>
                    </div>
                    <div style={{backgroundColor: "#29A9E1"}}>
                        <img src={require("../img/icon4.png")} alt="icon"/>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={require("../img/icon5.png")} alt={"icon"}/>
                        <div>(330) 718 - 8699</div>
                    </div>
                    <div>
                        <img src={require("../img/icon6.png")} alt={"icon"}/>
                        <div>HospitalAdmin@gmail.com</div>
                    </div>
                    <div>
                        <img src={require("../img/icon7.png")} alt={"icon"}/>
                        <div>Keas 69 Str.
                             15234, Chalandri
                             Athens,
                             Greece
                        </div>
                    </div>
                </div>
                <hr/>
                <div>©2022 Global Access Telehealth. All Rights Reserved.Privacy Policy</div>
            </div>
        );
    }
}

export default Footer;