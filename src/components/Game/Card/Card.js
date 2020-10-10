import React, { useState } from "react";

const Card = () => {
    const [state, setState] = useState(false);
    return (
        <img
            src={
                state
                    ? "https://i.imgur.com/twFChyw.png"
                    : "https://i.imgur.com/gzzMDBs.png"
            }
            alt={state ? "Front" : "Back"}
            onClick={() => {
                setState(!state);
            }}
        />
    );
};

export default Card;
