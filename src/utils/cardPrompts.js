import React from 'react'
import Ace from "./photos/ace.png"
import Anthology from "./photos/anthology.png";
import blackHistory from "./photos/black-history.png";
import blm from "./photos/blm.png";
import disability from "./photos/disability.png";
import getOut from "./photos/get-out.png";
import goodEvil from "./photos/good-vs-evil.png";
import mentalHealth from "./photos/mental-health.png";
import newbie from "./photos/newbie.png";
import nonBinary from "./photos/non-binary.png";
import pride from "./photos/pride.png";
import sexWork from "./photos/sex-work.png";
import stem from "./photos/stem.png";
import chance from "./photos/take-a-chance.png";
import throwback from "./photos/Throwback.png";
import unsure from "./photos/unsure.png";
import young from "./photos/Young-folx.png";
import seance from "./photos/seance.png";
import gandalf from "./photos/gandalf.png";
import local from "./photos/local.png";



// const Cards = ["Prompt_1", "Prompt_2", "Prompt_3", "Prompt_4", "Prompt_5", "Prompt_6"].sort(

const CardPrompts = [
    Ace,
    Anthology,
    blackHistory,
    disability,
    stem,
    blm,
    chance,
    getOut,
    goodEvil,
    mentalHealth,
    newbie,
    sexWork,
    pride,
    throwback,
    nonBinary,
    unsure,
    young,
    seance,
    gandalf,
    local
].sort(
    () => 0.5 - Math.random()
);

// <img src={Ace} alt="" />,
// <img src="./photos/anthology" alt="" />,
// <img src="./photos/black-history" alt="" />,
// <img src="./photos/blm" alt="" />,
// <img src="./photos/disability-protag" alt="" />,
// <img src="./photos/get-out" alt="" />,
// <img src="./photos/good-vs-evil" alt="" />,
// <img src="./photos/mental-health" alt="" />,
// <img src="./photos/newbie" alt="" />,
// <img src="./photos/non-binary" alt="" />,
// <img src="./photos/pride" alt="" />,
// <img src="./photos/sex-work" alt="" />,
// <img src="./photos/stem" alt="" />,
// <img src="./photos/take-a-chance" alt="" />,
// <img src="./photos/Throwback" alt="" />,
// <img src="./photos/unsure" alt="" />,
// <img src="./photos/Young-folx" alt="" />,
// "Prompt_1", "Prompt_2", "Prompt_3", "Prompt_4", "Prompt_5", "Prompt_6"]
// .sort(
//     () => 0.5 - Math.random()
// );

export default CardPrompts



