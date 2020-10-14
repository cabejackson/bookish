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
// import UpdateGoalForm from "../SavedGoals/updateGoalForm/UpdateGoalForm";

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
		tbr_number: 2,
		// isSelected: false,
		reading_goals: "",
		timeframe: "October",
		userId: "data.userId",
		handleLogoutClick: false
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
		// this.setState(
		TokenService.clearAuthToken()
		// )
	}

	renderLogoutLink() {
		return (
			<div className='Header__logged-in'>
				<Link
					onClick={this.handleLogoutClick}
					to='/'>
					LOGOUT
       			</Link>
				<br />
				<Link
					to="/tbr-game">
					CREATE
				</Link>
				<br />
				<Link
					to="/saved-goals">
					MY GOALS
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


	getUserGoals = () => {
		fetch(`${config.API_ENDPOINT}/goals/saved-reading-goals/user/${TokenService.getCredentials().userId}`,
			{

				headers: {
					'content-type': 'application/json',
					'authorization': `basic ${TokenService.getCredentials().tokenKey}`,
				}
			}
				.then((res) => res.json())
				.then((data) => {

					console.log("this is data:", data)

				})

				.catch((error) => {
					console.log(error.message)
				})
		)

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
				{/* <Route exact path="/edit" component={UpdateGoalForm} /> */}
			</>
		);
	}

	handleUpdateGoal = updateGoal => {
		const newGoals = this.state.articles.map(art =>
			(art.id === updateGoal.id)
				? updateGoal
				: art
		)
		this.setState({
			goals: newGoals
		})
	};


	handleAddGoal = (goal) => {
		this.setState({
			goals: [...this.state.goals, goal]
		});
	};

	handleDeleteGoal = (goalId) => {
		this.setState({
			goals: this.state.goals.filter((goal) => goal.id !== goalId)
		});
	};

	render() {
		const value = {
			prompts: this.state.prompts,
			goals: this.state.goals,
			handleAddGoal: this.handleAddGoal,
			handleDeleteGoal: this.handleDeleteGoal,
			handleUpdateGoal: this.handleUpdateGoal,
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
			handleLogoutClick: this.handleLogoutClick,
			userId: this.userId,
			getUserGoals: this.getUserGoals


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
