import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      counter: ++state.counter
    }));
  }

  render() {
    let color;
    const count = this.state.counter;
    if (count <= 3) {
      color = 'level-1';
    } else if (count <= 6) {
      color = 'level-2';
    } else if (count <= 9) {
      color = 'level-3';
    } else if (count <= 12) {
      color = 'level-4';
    } else if (count <= 15) {
      color = 'level-5';
    } else {
      color = 'level-6';
    }
    return (
      <button onClick={this.handleClick} className={color}>
        Hot Button
      </button>
    );
  }
}
