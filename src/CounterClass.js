import { Component } from 'react';

export default class CounterClass extends Component {
  state = {
    counter: 0,
    text: '',
  };
  
  increaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  handleInput = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <p>CounterClass</p>
        <p>{this.state.counter}</p>
        <button onClick={this.increaseCounter}>click</button>
        <input type='text' onInput={(event) => this.handleInput(event)}></input>
        {/* <p>{this.props.name}</p>
        <p>{this.props.children}</p>
        <p>{this.props.age}</p> */}
      </div>
    );
  }
}
CounterClass.defaultProps = { age: 'def age 29' };
