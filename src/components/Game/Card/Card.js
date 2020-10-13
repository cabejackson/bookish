import React, { useState } from "react";
// import cardPrompts from "../../../utils/cardPrompts"

const Card = ({ cardId }) => {
    const [state, setState] = useState(false);
    return (
        <img
            src={
                state
                    ? "//placehold.it/100?text=" + cardId
                    : "//placehold.it/100?text=Back"
            }
            alt={state ? "Front" : "Back"}
            onClick={() => {
                setState(!state);
            }}
        />
    );
};

export default Card;
