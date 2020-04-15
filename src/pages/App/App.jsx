import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.css';

/* ----------------COMPONENTS------------------ */
import Nav from '../../components/Nav/Nav'
import SignupCard from '../../components/Signup/Signup';
import LoginCard from '../../components/LoginCard/LoginCard';
import ShortcutList from '../../components/ShortcutList/ShortcutList';

/* ------------------PAGES------------------ */
import ShortcutAddPage from '../ShortcutAddPage/ShortcutAddPage';

/* ------------------SERVICES------------------ */
import userService from '../../utils/userService';
import shortcutService from '../../utils/shortcutService';


class App extends Component {
    constructor() {
        super();
        this.state = {
          user: userService.getUser(),
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
        await shortcutService.create(newShortcutData);
        this.getAllShortcuts();
    }

    // getAllShortcuts = async () => {
    //   const shortcuts = await shortcutService.getAll();
    //   console.log("GETALLSHORTCUTS: ", shortcuts)
    //   return(shortcuts);
    // }

  //   async componentDidMount() {
  //     const group = await fetchGroup(this.props.match.params.id);
  //     this.setState({
  //         group: group
  //     })
  // }

    async componentDidMount() {
      const shortcuts = await shortcutService.getAll();
      this.setState({shortcuts: shortcuts})
    }


    render() {
      console.log("STATE.SHORTCUTS: ", this.state.shortcuts)
      console.log(this.state.user)
        return (
            <div className="App">
                <Nav user={this.state.user} handleLogout={this.handleLogout}/>
                <ShortcutList 
                    shortcuts={this.state.shortcuts}/>
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