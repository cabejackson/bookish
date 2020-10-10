import React, { useState } from 'react';
import ApiContext from "../../ApiContext";
// import config from "../../config";
// import PromptsApiService from "../../services/prompts-api-service"


// const About = () => {
export default function About(props) {

    // const [prompts, setPrompts] = useState([])

    //this shows prompts in console:
    //but how do i show those prompts on yhe page?
    // fetch(`${config.API_ENDPOINT}/prompts/reveal-cards`)
    //     .then(res => res.json())
    //     .then(data => setPrompts(data))
    //     .catch(error => {
    //         console.error(error.message)
    //     })


    return (
        <ApiContext.Consumer>
            {context => {
                // console.log('this is context', context);
                return (
                    <>
                        <h1>More About the Developer<br />
                        & Goals for this App!</h1>
                        <h2>Here's a list of card prompts:</h2>
                        {context.prompts.map(p => (<p key={p.id}>{p.prompt_descr}</p>))}

                        <p>I'm baby photo booth deep v tote bag artisan polaroid. </p>
                        <p>I'm baby photo booth deep v tote bag artisan polaroid. </p>
                        <p>I'm baby photo booth deep v tote bag artisan polaroid. </p>
                        <p>I'm baby photo booth deep v tote bag artisan polaroid. </p>

                        <h2>Developer Bio</h2>
                        <p>I'm baby photo booth deep v tote bag artisan polaroid.<br />
                        I'm baby photo booth deep v tote bag artisan polaroid.<br />
                        I'm baby photo booth deep v tote bag artisan polaroid.<br />
                        I'm baby photo booth deep v tote bag artisan polaroid.<br />
                        </p>

                    </>
                )
            }}
        </ApiContext.Consumer>




    )
}

