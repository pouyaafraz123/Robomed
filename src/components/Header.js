import React from "react";

class Header extends React.Component {
    render() {
        return (
            <header className={"header"}>
                <div className={"header__inside"}>
                    <div className={"header__content"}>
                        <h1 className={"header__title"}>
                            {this.props.title}
                        </h1>
                        <p className={"header__text"}>
                            {this.props.text}
                        </p>
                        <button className={"btn btn--blue header__btn"}>Login to System</button>
                    </div>
                    <div className={"header__img"}>
                        <img src={""} alt={"logo"}/>
                    </div>
                    <div className={"header__detail"}>
                        {this.renderDetail(this.props.details)}
                    </div>
                </div>
            </header>
        );
    }

    renderDetail(details) {
        return details.map(detail => {
            return (
                <div className={"header__detail"}>
                    <div className={"header__detail-number"}><strong>+{detail.num}</strong></div>
                    <div className={"header__detail-text"}><strong>+{detail.text}</strong></div>
                </div>
            );
        })
    }
}

export default Header;