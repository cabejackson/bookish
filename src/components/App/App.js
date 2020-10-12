import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import ApiContext from "../../context/ApiContext";
import TokenService from '../../services/token-services'
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
import UpdateGoalForm from "../updateGoalForm/UpdateGoalForm";

export default class App extends Component {
	state = {
		prompts: [],
		goals: [],
		// value: "",
		first_name: "",
		last_name: "",
		user_name: "",
		email: "",
		password: "",
		tbr_number: null,
		// isSelected: false,
		reading_goals: "",
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



	handleLogoutClick = () => {
		TokenService.clearAuthToken()
	}

	renderLogoutLink() {
		return (
			<div className='Header__logged-in'>
				<Link
					onClick={this.handleLogoutClick}
					to='/'>
					LOGOUT
        </Link>
			</div>
		)
	}

	renderLoginLink() {
		return (
			<div className='Header__not-logged-in'>

				<Link to='/sign-up'>
					SIGNUP
        </Link>
				<br />
				<Link to='/login'>
					LOGIN
        </Link>

			</div>
		)
	}











	componentDidMount = () => {
		// console.log("api called")

		Promise.all([
			fetch(`${config.API_ENDPOINT}/goals/saved-reading-goals`), {
				headers: {
					// 'authorization': `basic ${TokenService.getAuthToken()}`,
				},
			}
		])
			.then(([goalsRes]) => {
				if (!goalsRes.ok) return goalsRes.json().then((e) => Promise.reject(e));

				return Promise.all([goalsRes.json()]);
			})
			.then(([goals]) => {
				console.log('this is goals in the .then', goals);
				this.setState({ goals });
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
				<Route exact path="/edit" component={UpdateGoalForm} />
			</>
		);
	}

	updateGoal = () => { };
	updateGoal = updateGoal => {
		const newGoals = this.state.articles.map(art =>
			(art.id === updateGoal.id)
				? updateGoal
				: art
		)
		this.setState({
			goals: newGoals
		})
	};

	render() {
		const value = {
			prompts: this.state.prompts,
			goals: this.state.goals,
			addGoal: this.addGoal,
			deleteGoal: this.deleteGoal,
			updateGoal: this.updateGoal,
			// value: this.state.value,
			handleInputChange: this.handleInputChange,
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			user_name: this.state.user_name,
			email: this.state.email,
			password: this.state.password,
			tbr_number: this.state.tbr_number,
			// isSelected: this.state.isSelected
			reading_goals: this.state.reading_goals,
			timeframe: this.state.timeframe,
			renderLogoutLink: this.renderLogoutLink,
			renderLoginLink: this.renderLoginLink,
			handleLogoutClick: this.handleLogoutClick


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
