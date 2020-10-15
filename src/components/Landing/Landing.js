import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import NavButton from "../NavButton/NavButton";

const Landing = () => {
    return (
        <>
            <div className="body___divForEntirePage">
                <div className="content-img-background" >




                    <div className="mainBox">
                        <div className="boarderLine">
                            {/* <div className="titleText">
                                <span>title could go here</span>
                            </div> */}
                            <div className="cutesyLine"></div>
                            <h3 className="catchyPhrase">BROADEN<br /> YOUR<br /> PERSPECTIVE</h3>
                            {/* <h2>Click the Links above to Sign Up or Login to get started!</h2>
                        <p>Here's a brief summary of the app,
                    <br />
                    but check out the about page for more details
                    <br />
                    about the devoloper and future app goals</p> */}
                            <button id="button-go-to-about" className="about___btn">
                                <NavButton
                                    tag={Link}
                                    to="/about"
                                    type="button"
                                    className="NavButton__go-to-about-button"
                                >

                                    LEARN MORE!

                    </NavButton>
                            </button>


                        </div>
                    </div>

                </div>
                {/* <div className="deleteSoon">
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

                </div> */}
            </div>
        </>
    );
};

export default Landing;


