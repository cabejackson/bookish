import React, { Component } from "react";
import { Route } from "react-router-dom";
import ApiContext from "../../ApiContext";
import config from "../../config";
import Header from "../Header/Header";
import Landing from "../Landing/Landing";
import TBRGame from "../TBRGame/TBRGame";
import ErrorBoundary from "../../ErrorBoundary";
import SavedGoals from "../SavedGoals/SavedGoals";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import About from "../About/About";
import Home from "../Home/Home";

export default class App extends Component {
    state = {
        prompts: [],
        // value: "",
        first_name: "",
        last_name: "",
        user_name: "",
        email: "",
        password: "",
        tbrNumber: null,
        // isSelected: false,
        readingGoal: "",
        timeframe: ""
    }
    //  Hnadles form input changes
    //Here's a DRY method of doing things,
    //Use this for the sign-up, login, and TBR game forms
    handleInputChange = (e) => {
        console.log("handle input change is running");
        this.setState({
            [e.target.name]: e.target.value

        });
    };


    componentDidMount = () => {
        // console.log("api called")

        Promise.all([
            fetch(`${config.API_ENDPOINT}/prompts/about`),

        ])
            .then(([promptsRes]) => {
                if (!promptsRes.ok) return promptsRes.json().then((e) => Promise.reject(e));

                return Promise.all([promptsRes.json()]);
            })
            .then(([prompts]) => {
                console.log('this is prompts in the .then', prompts);
                this.setState({ prompts });
            })
            .catch((error) => {
                console.error({ error });
            });

    }






    renderMainRoutes() {
        return (
            <>
                <Route exact path="/" component={Landing} />
                <Route exact path="/tbr-game" component={TBRGame} />
                {/* <Route exact path="/reveal-cards" component={RevealCards} /> */}
                <Route exact path="/saved-goals" component={SavedGoals} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/sign-up" component={SignUp} />
                <Route exact path="/about" component={About} />
                <Route exact path="/home" component={Home} />
            </>
        );
    }

    render() {
        const value = {
            prompts: this.state.prompts,
            // value: this.state.value,
            handleInputChange: this.handleInputChange,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            user_name: this.state.user_name,
            email: this.state.email,
            password: this.state.password,
            tbrNumber: this.state.tbrNumber,
            // isSelected: this.state.isSelected
            readingGoal: this.state.readingGoal,
            timeframe: this.state.timeframe


        }
        // console.log('test', this.state.prompts);
        return (
            <ErrorBoundary>
                <ApiContext.Provider value={value}>
                    <div className="App">
                        {/* <nav className="App__nav"> {this.renderNavRoutes()} </nav> */}
                        <header className="App__header">
                            <Header />
                        </header>
                        <main className="App__main"> {this.renderMainRoutes()} </main>
                    </div>
                </ApiContext.Provider>
            </ErrorBoundary>
        );
    }
}
