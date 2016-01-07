import React from 'react';
import Child from './Child';

const App = React.createClass({
  getInitialState() {
    return {
      name: "Patrick"
    }
  },
  render() {
    return(
      <div>
        I didn't
        <input onKeyDown={this.handleKeyDown} />
        <Child name={this.state.name} setChip={this.setToChip.bind(this)}/>
      </div>
    )
  },
  handleKeyDown(event){
    if(event.keyCode === 13){
      this.setState({
        name: event.target.value
      })
    }
  },
  setToChip() {
    this.setState({
      name: "Chip"
    })
  }
});

export default App
