import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import NavButton from "../NavButton/NavButton";
//future implementation adding a home page for logged in users
const Landing = () => {
    return (
        <>
            <div>
                {/* <!-- <img src="photos/pinkish-books.jpg" alt="A filled bookshelf"><br> --> */}
                <h2>Choose an option below:</h2>
                <button id="button-start-tbr-game">
                    <NavButton
                        tag={Link}
                        to="/tbr-game"
                        type="button"
                        className="NavButton__go-to-game-button"
                    >

                        START TBR GAME!
          </NavButton>
                </button>
                <br />
                <button id="button-start-tbr-game">
                    <NavButton
                        tag={Link}
                        to="/saved-goals"
                        type="button"
                        className="NavButton__go-to-game-button"
                    >

                        SAVED GOALS!
          </NavButton>
                </button>

            </div>
        </>
    );
};

export default Landing;
