import React from "react";

function Sidebar() {
	return (
		<div className="card shadow-sm p-3">
			<h4 className="mb-3">🔥 Trending Topics</h4>

			<ul className="list-group">
				<li className="list-group-item">
					Artificial Intelligence
				</li>

				<li className="list-group-item">
					Cricket World Cup
				</li>

				<li className="list-group-item">
					Startup Funding
				</li>

				<li className="list-group-item">
					Space Research
				</li>

				<li className="list-group-item">
					Global Economy
				</li>
			</ul>
		</div>
	);
}

export default Sidebar;