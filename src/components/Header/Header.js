import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import TokenService from '../../services/token-services'
import ApiContext from "../../context/ApiContext";




const Header = () => {

	return (
		<ApiContext.Consumer>
			{context => {
				return (
					<>
						<header>
							<nav>
								<h1>Welcome to Bowties & Books!</h1>

								<ul id="menu">
									{/* <!-- links in nav would route to dif pages --> */}
									<li>
										<Link to="/" > START HERE </Link>
									</li>
									{/* <li>
                            <Link to="/login" > LOGIN </Link>
                        </li>
                                    <li>
                                        <Link to="/sign-up" > SIGN-UP </Link>
                                    </li> */}
									<li>
										<Link to="/about" > ABOUT </Link>
									</li>
									<li>
										{
											TokenService.hasAuthToken()
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
