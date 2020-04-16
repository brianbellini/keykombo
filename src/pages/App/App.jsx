import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.css';

/* ----------------COMPONENTS------------------ */
import Nav from '../../components/Nav/Nav'
import SignupCard from '../../components/Signup/Signup';
import LoginCard from '../../components/LoginCard/LoginCard';
import ShortcutList from '../../components/ShortcutList/ShortcutList';
import MyShortcuts from '../../components/MyShortcuts/MyShortcuts';
import MasterShortcuts from '../../components/MasterShortcuts/MasterShortcuts';
import AppFilter from '../../components/AppFilter/AppFilter';

/* ------------------PAGES------------------ */
import ShortcutAddPage from '../ShortcutAddPage/ShortcutAddPage';

/* ------------------SERVICES------------------ */
import userService from '../../utils/userService';
import shortcutService from '../../utils/shortcutService';
import myShortcutService from '../../utils/myShortcutService';


class App extends Component {
    constructor() {
        super();
        this.state = {
          user: userService.getUser(),
          myList: false,
          shortcuts: [],
        };
    }

    handleSignupOrLogin = () => {
      this.setState({user: userService.getUser()});
    }

    handleLogout = () => {
      userService.logout();
      this.setState({user: null});
    }

    handleAddShortcut = async newShortcutData => {
        await myShortcutService.create(newShortcutData);
        this.getAllShortcuts();
    }

    handleListSelector = (clicked) => {
      (clicked === true) ? this.setState({myList: true}) : this.setState({myList: false})
    }

    async componentDidMount() {
      if (this.state.myShortcuts) {
        const shortcuts = await myShortcutService.getAll();
        this.setState({shortcuts: shortcuts})
      } else {
        const shortcuts = await shortcutService.getAll();
        this.setState({shortcuts: shortcuts})
      }
    }


    render() {
      console.log('USER: ', this.state.user)
        return (
            <div className="App">
                <Nav user={this.state.user} handleLogout={this.handleLogout}/>
                <AppFilter applications={this.state.shortcuts}/>
                <MasterShortcuts handleListSelector={this.handleListSelector}/>
                <MyShortcuts handleListSelector={this.handleListSelector}/>
                <ShortcutList 
                    shortcuts={this.state.shortcuts}/>
                    {/* // user={this.state.user._id}/> */}
                <LoginCard
                    handleSignupOrLogin={this.handleSignupOrLogin} />
                <SignupCard
                    handleSignupOrLogin={this.handleSignupOrLogin} />
                <Route exact path='/add' render={() =>
              <ShortcutAddPage handleAddShortcut={this.handleAddShortcut} userID={this.state.user._id}/>
                }/>
            </div>
        );
    }
}

export default App;