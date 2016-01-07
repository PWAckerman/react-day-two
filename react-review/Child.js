import React from "react";

const Child = React.createClass({
  render() {
    return (
      <div>
      <h1>{this.props.name}</h1>
      <button onClick={this.props.setChip}>Change Name To Chip</button>
      </div>
    )
  }
})

export default Child
