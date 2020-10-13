import React, { Component } from 'react'
import photos from "./photos"

// const Cards = ["Prompt_1", "Prompt_2", "Prompt_3", "Prompt_4", "Prompt_5", "Prompt_6"].sort(


const cardPrompts = () => {

    [
        <img src="./photos/ace" alt="" />,
        <img src="./photos/anthology" alt="" />,
        <img src="./photos/black-history" alt="" />,
        <img src="./photos/blm" alt="" />,
        <img src="./photos/disability-protag" alt="" />,
        <img src="./photos/get-out" alt="" />,
        <img src="./photos/good-vs-evil" alt="" />,
        <img src="./photos/mental-health" alt="" />,
        <img src="./photos/newbie" alt="" />,
        <img src="./photos/non-binary" alt="" />,
        <img src="./photos/pride" alt="" />,
        <img src="./photos/sex-work" alt="" />,
        <img src="./photos/stem" alt="" />,
        <img src="./photos/take-a-chance" alt="" />,
        <img src="./photos/Throwback" alt="" />,
        <img src="./photos/unsure" alt="" />,
        <img src="./photos/Young-folx" alt="" />,
        "Prompt_1", "Prompt_2", "Prompt_3", "Prompt_4", "Prompt_5", "Prompt_6"].sort(
            () => 0.5 - Math.random()
        );

}
export default cardPrompts



