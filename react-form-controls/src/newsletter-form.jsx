import React from 'react';

export default class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', timerID: null };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
    this.logState();
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  logState() {
    clearTimeout(this.state.timerID);
    const timer = setTimeout(() => {
      console.log('state:', this.state);
    }, 1000);
    this.setState({ timerID: timer });
  }

  render() {
    // console.log(this.state.email);
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">
          Email
          <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Sign Up" />
      </form>
    );
  }
}
