import React, {Component} from 'react';
import userService from '../../utils/userService'
import './LoginCard.css';

class LoginCard extends Component {
  
  state = {
    email: '',
    password: ''
  };

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      // signed up
    } catch (err) {
      // invalid user data
      alert('Invalid Credentials!');
    }
  }

  render() {
    return (
      <div className="LoginCard">
        <h2>Log In</h2>
        <form onSubmit={this.handleSubmit} >
          <div>
            <div>
              <input type="email" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <div>
              <input type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <div>
              <button className="login-button">Log In</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginCard;
