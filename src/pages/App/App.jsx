import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Nav from '../../components/Nav/Nav'
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';


class App extends Component {
    constructor() {
        super();
        this.state = {
          user: userService.getUser(), //GETTING NULL ALL THE TIME
        };
    }

    handleLogout = () => {
      userService.logout();
      this.setState({user: null});
    }

    render() {
        return (
            <div className="App">
                <Nav user={this.state.user} handleLogout={this.handleLogout}/>
                <Route exact path='/signup' render={({ history }) => 
                    <SignupPage
                      history={history} />
                }/>
                <Route exact path='/login' render={() => 
                    <LoginPage />
                }/>
                  
            </div>
        );
    }
}

export default App;
