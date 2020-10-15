import React, { useState } from "react";
import BackImage from "../../../utils/photos/card_backside_1.png";
// import cardPrompts from "../../../utils/cardPrompts"

const Card = ({ Image }) => {
    const [state, setState] = useState(false);
    return (
        <img className="cards"
            src={
                state
                    ? Image
                    : BackImage
            }
            alt={state ? "Front" : "Back"}
            onClick={() => {
                setState(!state);
            }}
        />
    );
};

export default Card;
