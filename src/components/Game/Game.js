import React, { useState } from "react";
import Card from "./Card/Card";
import "./Game.css";

const Game = () => {

	//move this to an array of images instead of just text
	const Cards = ["Prompt_1", "Prompt_2", "Prompt_3", "Prompt_4", "Prompt_5", "Prompt_6"].sort(
		() => 0.5 - Math.random()
	);


	const [Num, setNum] = useState("");

	if (Cards.length > Num) {
		if (Num < 0) Cards.length = 0;
		else Cards.length = Num;
	}

	return (
		<div className="Game">
			<h2>TBR Card Generator:</h2>
			<p>Add the number of TBR cards you'd like to view.
				<br /> Then click on the cards to reveal their prompts
				<br />Feel free to use these prompts
				to help you think of reading goals</p>

			<div>
				Show me
				<input
					type="number"

					value={Num}
					placeholder="e.g. 5"
					onChange={(e) => {
						setNum(e.target.value);
					}}
				/>{" "}
        				TBR cards.
      			</div>

			<div className="cards">
				{/* {Array.from(
                    Array(
                        (() => {
                            if (isNaN(Num)) return 0;
                            if (Num < 0) return 0;
                            else return +Num;
                        })()
                    ).keys()
                ).map((card, key) => (
                    <Card key={key} />
                ))} */}

				{Cards.map((card, key) => (
					<Card cardId={card} key={key} />
				))}
			</div>

			{Num > Cards.length && (
				<p>I have got only {Cards.length} cards, so showing everything.</p>
			)}




		</div>
	);
};

export default Game;
