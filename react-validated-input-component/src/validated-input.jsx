import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    const pass = this.state.password;
    let msg, icon;
    if (pass.length <= 0) {
      msg = 'A password is required.';
      icon = 'fas fa-times red';
    } else if (pass.length < 8) {
      msg = 'Your password is too short.';
      icon = 'fas fa-times red';
    } else {
      icon = 'fas fa-check green';
    }
    return (
      <form>
        <label htmlFor="password" className="password-header">Password</label>
        <div className="flexy">
          <input type="password" name="password" id="password"
            value={this.state.password} onChange={this.handleChange} />
          <i className={icon}></i>
        </div>
        <p className='red'>{msg}</p>
      </form>
    );
  }
}
