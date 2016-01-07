import React from "react";
import Child from "./Child"
import Stateless from "./StatelessComp"

var App = React.createClass({
	render() {
		return (
			<div>
				<Child names={["jim", "me", "you"]} />
				<Stateless name={"Jeffrey"} />
			</div>
		)
	}
})

export default App
