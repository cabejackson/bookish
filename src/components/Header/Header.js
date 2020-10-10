import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";


const Header = () => {

    // render logout link:
    // {
    //   TokenService.hasAuthToken()
    //   ? this.renderLogoutLink()
    //   : this.renderLoginLink()
    // }


    return (
        <>
            <header>
                <nav>
                    <h1>Welcome to Bowties & Books!</h1>

                    <ul id="menu">
                        {/* <!-- links in nav would route to dif pages --> */}
                        <li>
                            <Link to="/" > START HERE </Link>
                        </li>
                        <li>
                            <Link to="/login" > LOGIN </Link>
                        </li>
                        <li>
                            <Link to="/sign-up" > SIGN-UP </Link>
                        </li>
                        <li>
                            <Link to="/about" > ABOUT </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
