import React from "react";
import Child from "./Child"

var App = React.createClass({

	render() {
		return (
			<div>
				App
				<Child name="James"/>
			</div>
		)
	}
})

export default App;
