import React from 'react';
import "./SignUp.css";
import ApiContext from "../../context/ApiContext";
import config from "../../config";


export default function SignUp(props) {

    // handles the sign-up form submission
    // adds a new user to the sever (which adds it to the db?)
    // should a message appeare on the page? - perhaps
    const handleSignUpSubmission = (first_name, last_name, user_name, email, password) => {
        const userSignUpInput = { first_name, last_name, user_name, email, password };

        fetch(`${config.API_ENDPOINT}/users/`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userSignUpInput)
            })
            .then((res) => res.json())
            .then((data) => console.log("this is data:", data))

            .catch((error) => {
                console.log(error.message)
            })
    }

    const validatePassword = (password) => {
        // console.log("this is the tbr number user inputted:", tbrNumber);
        if (password < 8)
            return "password must contain at least 8 characters";
        // if (password !== 20)
        //     return "We only have 20 prompts so far, lol but feel free to read more books than that!";
    };
    // Password must contain 1 upper case, lower case, number and special character


    return (
        <ApiContext.Consumer>
            {context => {
                return (
                    <div className="body___divForEntirePage">

                        <div className="signup__form">
                            <form
                                className="signup-form-submission"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    // console.log("the SIGN-UP form has been submitted", context);
                                    handleSignUpSubmission(
                                        // context.value,
                                        context.first_name,
                                        context.last_name,
                                        context.user_name,
                                        context.email,
                                        context.password
                                    );
                                }}>
                                <h2 className="signUp__h2">Fill out the form below <br />to create an account</h2>
                                <div className="inputs___form">
                                    <label htmlFor='first_name'>First Name:</label><br />

                                    <input name='first_name'
                                        value={context.first_name}
                                        type='text'
                                        onChange={(e) => context.handleInputChange(e)}
                                        required /><br />

                                    <label htmlFor='last_name'>Last Name:</label><br />

                                    <input name='last_name'
                                        value={context.last_name}
                                        type='text'
                                        onChange={(e) => context.handleInputChange(e)}
                                        required /><br />

                                    <label htmlFor='user_name'>Username:</label><br />

                                    <input name='user_name'
                                        value={context.user_name}
                                        type='text'
                                        onChange={(e) => context.handleInputChange(e)}
                                        required /><br />

                                    <label htmlFor='email'>Email:</label><br />

                                    <input name='email'
                                        value={context.email}
                                        type='email'
                                        onChange={(e) => context.handleInputChange(e)}
                                        required /><br />

                                    <label htmlFor='password'>Password:</label><br />

                                    <input name='password'
                                        value={context.password}
                                        type='password'
                                        onChange={(e) => context.handleInputChange(e)} required /><br />
                                    {/* <ValidationError message={validatePassword(context.password)} /> */}

                                </div>
                                <button id='submit-sign-up' className="submitSignUp__btn" type='submit'>Sign Up</button>
                            </form>
                        </div>
                    </div>

                )
            }}
        </ApiContext.Consumer>

    )
}




