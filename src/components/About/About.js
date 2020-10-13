import React, { useState } from 'react';
import ApiContext from "../../context/ApiContext";
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
                        <h2>Here's a list of reading goals for example:</h2>
                        {/* {context.prompts.map(p => (<p key={p.id}>{p.prompt_descr}</p>))} */}
                        {context.goals.map(g => (<p key={g.id}>
                            {
                                // g.tbr_number,
                                // g.timeframe,
                                g.reading_goals
                                // p.bnb_users_id,

                            }
                        </p>))}

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

