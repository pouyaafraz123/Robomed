import React from "react";

class Newsletter extends React.Component{
    render() {
        return (
            <div>
                <h6>Newsletter Subscribe</h6>
                <h1>To Get More News Subscribe Us</h1>
                <input type={"text"} placeholder={"Email Address"}/>
                <button>Subscribe</button>
            </div>
        );
    }
}

export default Newsletter;