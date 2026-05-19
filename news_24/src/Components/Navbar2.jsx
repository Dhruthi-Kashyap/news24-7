import React from "react";
import { Link } from "react-router-dom";

function Navbar2() {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
			<div className="container-fluid">

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse"
					id="navbarNav"
				>
					<ul className="navbar-nav">

						<li className="nav-item">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" to="/business">
								Business
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" to="/technology">
								Technology
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" to="/sports">
								Sports
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" to="/health">
								Health
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" to="/science">
								Science
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" to="/entertainment">
								Entertainment
							</Link>
						</li>

					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar2;