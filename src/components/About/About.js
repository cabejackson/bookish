import React from 'react';
import { Link } from "react-router-dom";
import ApiContext from "../../context/ApiContext";
import NavButton from "../NavButton/NavButton";
import "./About.css";



export default function About(props) {
    return (
        <ApiContext.Consumer>
            {context => {
                // console.log('this is context', context);
                return (
                    <>
                        <div className="body___divForEntirePage-about">
                            <div className="content-img-background-about" >




                                <div className="mainBox-about">
                                    <div className="boarderLine-about">
                                        <div className="titleText-about">
                                            <h2>WHY SHOULD YOU <br /> USE THIS APP</h2>
                                        </div>
                                        <div className="cutesyLine-about"></div>
                                        <h3 className="catchyPhrase-about">TO TRACK<br /> YOUR <br /> READING GOALS <br /><br /> & GET INTERESTING <br /> READING PROMPTS</h3>
                                        {/* <h2>Click the Links above to Sign Up or Login to get started!</h2>
                        <p>Here's a brief summary of the app,
                    <br />
                    but check out the about page for more details
                    <br />
                    about the devoloper and future app goals</p> */}
                                        {/* <button id="button-go-to-about" className="about___btn">
                                            <NavButton
                                                tag={Link}
                                                to="/about"
                                                type="button"
                                                className="NavButton__go-to-about-button"
                                            >

                                                LEARN MORE!

                    </NavButton>
                                        </button> */}


                                    </div>
                                </div>
                                <div className="mainBox-about">
                                    <div className="boarderLine-about">
                                        <div className="titleText-about">
                                            <h2>HOW TO <br /> USE THIS APP </h2>
                                        </div>
                                        <div className="cutesyLine-about"></div>
                                        <h3 className="catchyPhrase-about">Sign up for an account.
                                        Then create a reading goal. While creating a goal, you can view
                                        some reading prompts (the TBR cards) to help you plan your goals</h3>
                                        {/* <h2>Click the Links above to Sign Up or Login to get started!</h2>
                        <p>Here's a brief summary of the app,
                    <br />
                    but check out the about page for more details
                    <br />
                    about the devoloper and future app goals</p> */}
                                        <button id="button-go-to-sign-up" className="about___btn">
                                            <NavButton
                                                tag={Link}
                                                to="/sign-up"
                                                type="button"
                                                className="NavButton__go-to-sign-up-button"
                                            >

                                                SIGN-UP!

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

                )
            }}
        </ApiContext.Consumer>




    )
}


{/* <>
    <h1>More About the Developer<br />
                        & Goals for this App!</h1>
    <h2>Here's a list of reading goals for example:</h2>


    <h2>Developer Bio</h2>
    <p>I'm baby photo booth deep v tote bag artisan polaroid.<br />
                        I'm baby photo booth deep v tote bag artisan polaroid.<br />
                        I'm baby photo booth deep v tote bag artisan polaroid.<br />
                        I'm baby photo booth deep v tote bag artisan polaroid.<br />
    </p>
</> */}

//  <div className="mainBox">
//                                     <div className="boarderLine">
//                                         <div className="titleText">
//                                             <h2>HOW TO <br /> USE THIS APP <br /> (PART 2)</h2>
//                                         </div>
//                                         <div className="cutesyLine"></div>
//                                         <h3 className="catchyPhrase">CREATE A<br /> READING GOAL<br /> BY SAYING HOW MANY <br /> BOOKS YOU WANT TO READ
//                                         <br />
//                                             <br />
//                                         & CHOOSE "X" NUMBER
//                                         <br />
//                                         OF CARDS TO SHOW SOME
//                                         <br />

//                                         TO HELP GUIDE YOUR GOALS


//                                         </h3>
//                                         <h2>Click the Links above to Sign Up or Login to get started!</h2>
//                         <p>Here's a brief summary of the app,
//                     <br />
//                     but check out the about page for more details
//                     <br />
//                     about the devoloper and future app goals</p>
// <button id="button-go-to-about" className="about___btn">
//     <NavButton
//         tag={Link}
//         to="/about"
//         type="button"
//         className="NavButton__go-to-about-button"
//     >

//         LEARN MORE!

//                     </NavButton>
// </button>


//                                     </div >
//                                 </div > 