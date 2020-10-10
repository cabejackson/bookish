import React from 'react'
import "./Login.css";
// import TokenService from '../../services/token-service'
import ApiContext from "../../ApiContext";
import config from "../../config";



export default function Login(props) {

    // handles the login form submission
    // searches for the user via the sever (which looks in the db)
    // How do I make it to where logging in takes the user to like the user homepage? -- maybe i should add a user homepage

    const handleLoginSubmission = (user_name, password) => {
        //should an event.preventDefault() go here? -- no it goes in the return when this function is called
        const userLoginInput = { user_name, password };

        fetch(`${config.API_ENDPOINT}/login/`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" }, // should Authorization go in the headers ?
                //like this --> Authorization: `Schema ${user_name}:${password}`
                body: JSON.stringify(userLoginInput)
            })
            .then((res) => res.json())
            // what does the code below do differently? compared to the above, both work
            // .then(res =>
            //     (!res.ok)
            //         ? res.json().then(e => Promise.reject(e))
            //         : res.json()
            // )
            .then((data) => console.log("this is data:", data))

            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <ApiContext.Consumer>
            {context => {
                return (<div>
                    <form
                        className="login-form-submission"
                        onSubmit={(e) => {
                            e.preventDefault();
                            // console.log("the LOGIN form has been submitted");
                            handleLoginSubmission(
                                // context.value
                                context.user_name,
                                context.password

                            );
                        }}
                    >
                        <h2>Login to your account below!</h2>
                        {/* perhaps in the future we'll login using email instead of username */}
                        {/* <label htmlFor='email'>Email:</label><br />
                <input name='email' type='email' required /><br /> */}

                        <label htmlFor='user_name'>Username:</label><br />
                        <input
                            name='user_name'
                            value={context.user_name}
                            onChange={(e) => context.handleInputChange(e)}

                            type='text'
                            required /><br />
                        {/* SEE ABOVE: does using user_name here impact user_name on the sign-up form? */}
                        <label htmlFor='password'>Password:</label><br />
                        <input
                            name='password'
                            value={context.password}
                            onChange={(e) => context.handleInputChange(e)}
                            type='password'
                            required /><br />
                        <button id='submit-login' type='submit'>LOGIN</button>
                    </form>
                </div>
                )
            }}
        </ApiContext.Consumer>
    )
}

