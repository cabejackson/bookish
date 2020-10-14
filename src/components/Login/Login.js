import React from 'react'
import "./Login.css";
import TokenService from '../../services/token-services'
import ApiContext from "../../context/ApiContext";
import config from "../../config";


// export default function TBRGame(props) { 

export default function Login(props) {

    // handles the login form submission
    // searches for the user via the sever (which looks in the db)
    // How do I make it to where logging in takes the user to like the user homepage? -- maybe i should add a user homepage

    const handleLoginSubmission = (user_name, password) => {
        //should an event.preventDefault() go here? -- no it goes in the return when this function is called
        const userLoginInput = { user_name, password };

        fetch(`${config.API_ENDPOINT}/auth/login`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" }, // should Authorization go in the headers ? --yes
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
            .then((data) => {
                // console.log("this is data:", data.authToken)
                // window.localStorage.setItem(config.TOKEN_KEY, data.authToken)
                // console.log("this is the logged in user id", data.userId)

                TokenService.saveCredentials(data.authToken, data.userId)




            })

            // .then(res => {
            //     // user_name.value = ''
            //     // password.value = ''
            //     TokenService.saveAuthToken(res.authToken)
            // })

            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <ApiContext.Consumer>
            {context => {
                return (<div className="login__form">
                    <form
                        className="login-form-submission"
                        onSubmit={(e) => {
                            e.preventDefault();
                            console.log("the LOGIN form has been submitted");
                            console.log(context.user_name, context.password)

                            handleLoginSubmission(
                                // context.value
                                context.user_name,
                                context.password,

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
                        <button className="login___btn" id='submit-login' type='submit'>LOGIN</button>
                    </form>
                </div>
                )
            }}
        </ApiContext.Consumer>
    )
}

