import React from 'react';
import {Route} from 'react-router-dom';
// import logo from '../../logo.svg';
import './App.css';
import Nav from '../../components/Nav/Nav'
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';


function App() {
  return (
    <div className="App">
      <Nav />
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

export default App;
