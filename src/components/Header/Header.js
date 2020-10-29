import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ApiContext from "../../context/ApiContext";




const Header = () => {

	return (
		<ApiContext.Consumer>
			{context => {
				return (
					<>
						<header className="header">
							<nav>
								<h1 className="welcome">Welcome to Bowties  <br /> & Books!</h1>

								<ul className="navBar__ul">
									<li>
										<Link to="/" > START HERE </Link>
									</li>

									<li>
										<Link to="/about" > ABOUT </Link>
									</li>
									<li>
										{
											context.isLoggedIn
												? context.renderLogoutLink()
												: context.renderLoginLink()
										}
									</li>
								</ul>
							</nav>
						</header>
					</>
				)
			}}
		</ApiContext.Consumer>
	);
};

export default Header;