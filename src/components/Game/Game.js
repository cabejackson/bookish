import React, { useState } from "react";
import Card from "./Card/Card";
import "./Game.css";

const Game = () => {
    const [Num, setNum] = useState("");
    return (
        <div className="Game">
            <h1>[game explanation]</h1>
            <div>
                I wanna play with{" "}
                <input
                    type="number"

                    value={Num}
                    placeholder="e.g. 5"
                    onChange={(e) => {
                        setNum(e.target.value);
                    }}
                />{" "}
        cards.
      </div>
            <div className="cards">
                {Array.from(
                    Array(
                        (() => {
                            if (isNaN(Num)) return 0;
                            if (Num < 0) return 0;
                            else return +Num;
                        })()
                    ).keys()
                ).map((card, key) => (
                    <Card key={key} />
                ))}
            </div>
        </div>
    );
};

export default Game;
