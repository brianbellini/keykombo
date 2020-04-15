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
        <header className="header-footer">Log In</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default">Log In</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginCard;
