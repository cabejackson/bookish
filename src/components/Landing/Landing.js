import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import NavButton from "../NavButton/NavButton";

const Landing = () => {
    return (
        <>
            <div>
                <h2>Click the Links above to Sign Up or Login to get started!</h2>
                <p>Here's a brief summary of the app,
                    <br />
                    but check out the about page for more details
                    <br />
                    about the devoloper and future app goals</p>
                {/* <!-- <img src="photos/pinkish-books.jpg" alt="A filled bookshelf"><br> --> */}
                {/* <p>[this is placeholder for some cool bookish image]</p> */}
                <button id="button-go-to-about">
                    <NavButton
                        tag={Link}
                        to="/about"
                        type="button"
                        className="NavButton__go-to-about-button"
                    >

                        LEARN MORE!

                    </NavButton>
                </button>

                <p>button below is for caleb,
                    <br /> will delete soon!</p>

                <button id="button-go-to-game">
                    <NavButton
                        tag={Link}
                        to="/tbr-game"
                        type="button"
                        className="NavButton__go-to-game-button"
                    >

                        START GAME!
          </NavButton>
                </button>


            </div>
        </>
    );
};

export default Landing;
