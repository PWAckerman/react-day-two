import React from "react";
import Display from "./Display";
import getWeather from "./AsyncStuff";
var App = React.createClass({
	getInitialState(){
		return {
			address: ""
		}
	},
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input ref="input" />
				</form>
				<h1>{this.state.address}</h1>
			</div>
		)
	},
	handleSubmit(e) {
		e.preventDefault();
		var arr = this.refs.input.value.split(",");
		console.log(arr);
		getWeather.apply(this, arr);
	}
});

export default App
