import React from "react";
import ApiContext from "../../ApiContext";
import Game from "../Game/Game";
import "./TBRGame.css";
import NavButton from "../NavButton/NavButton";
import { Link } from "react-router-dom";


import ValidationError from "../../ValidationError";

// export default function TBRGame(props) -- maybe switch to this, ask abt the difference?
const TBRGame = () => {


  // handles the form submission
  // adds a new user to the sever (or to the db?)
  // should a message appeare on the page? - perhaps
  // const handleGameSubmission = (tbrNumber, cardsChosen) => {
  //   const userGameInput = { tbrNumber, cardsChosen };

  //   fetch(`${config.API_ENDPOINT}/users/`,
  //     {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(userGameInput)
  //     })
  //     .then((res) => res.json())
  //     .then((data) => console.log("this is data:", data))

  //     .catch((error) => {
  //       console.log(error.message)
  //     })
  // }


  const validateTbrNumber = (tbrNumber) => {
    // console.log("this is the tbr number user inputted:", tbrNumber);
    if (tbrNumber < 1)
      return "You gotta read more than 0 books silly!";
    if (tbrNumber > 20)
      return "We only have 20 prompts so far, lol but feel free to read more books than that!";
  };
  // Shows an error if user has chosen the correct number of cards
  // const validateCardsChosen = (tbrNumber) => {
  //   console.log("this is the tbr number user inputted:", tbrNumber);
  //   if (tbrNumber.length < 1)
  //     return "You need to read more than 0 books to play this game LOL!";
  //   if (tbrNumber.length > 5)
  //     return "We only have 5 prompts so far, lol so read less books!";
  // };

  return (
    <ApiContext.Consumer>
      {context => {
        return (
          <div>
            {/* <!-- start of TBR Game Page -->

        <!-- header would go at the top of this page too, -->
        <!-- IF RETURNING USER: -->
        <!-- nav would include a logout button routing to landing page -->
        <!-- also, this header could say "welcome back . . ." -->
        <!-- IF NEW USER: -->
        <!-- nav would include a "sign-up" and "login" links routing to those pages -->
        <!-- also, this header could say "welcome  . . ." -->

        <!-- backside-of-card would eventually need to be 12 unique cards --> */}

            <form
              className="game-form-submission"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("the GAME form has been submitted");
                // handleSubmit(context.value);
              }}
            >
              <h3>
                I would like to read
          <label htmlFor="tbrNumber">
                  <input
                    type="text"
                    id="tbrNumber"
                    name="tbrNumber"
                    value={context.tbrNumber || ""}
                    placeholder="e.g. 5"
                    onChange={(e) => context.handleInputChange(e)}
                    required
                  />
                </label><br />



          throughout

                <label htmlFor="timeframe">
                  <textarea
                    cols="35"
                    rows="1"

                    type="text"
                    id="timeframe"
                    name="timeframe"
                    value={context.timeframe || ""}
                    placeholder="e.g. October or Labor Day Weekend"
                    onChange={(e) => context.handleInputChange(e)}
                    required
                  />
                </label>








                <br />
              </h3>

              <ValidationError message={validateTbrNumber(context.tbrNumber)} />


              <div><Game /></div>



              <>
                <h2>My Reading Goals:</h2>

                <h3><li>I plan to read <code>{context.tbrNumber}</code> books during <code>{context.timeframe}</code>!</li></h3>
                <label htmlFor="readingGoal">
                  <textarea
                    cols="40"
                    rows="10"
                    type="text"
                    id="readingGoal"
                    name="readingGoal"
                    value={context.readingGoal || ""}
                    placeholder="e.g.
                    This month I plan to read an anthology by Latinx authors"
                    onChange={(e) => context.handleInputChange(e)}
                    required
                  />
                </label>
                <br />
                <button type="submit" id="button-for-saving-goals">
                  SAVE THIS GOAL
        </button>

              </>












            </form>
            <NavButton
              tag={Link}
              to="/saved-goals"
              type="button"
              className="NavButton__to-saved-goals-button"
            >
              MY SAVED GOALS!
      </NavButton>
          </div>)
      }}
    </ApiContext.Consumer>

  );
};

export default TBRGame;
