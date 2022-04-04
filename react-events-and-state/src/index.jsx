import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }

  render() {
    let msg;
    if (this.state.isClicked) {
      msg = 'Thanks!';
    } else {
      msg = 'Click Me!';
    }
    return (
      <button onClick={this.handleClick}>
        {msg}
      </button>
    );
  }
}

ReactDOM.render(
  <CustomButton />,
  document.getElementById('root')
);
