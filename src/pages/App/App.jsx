import React, {Component} from 'react';
// import {Route} from 'react-router-dom';
import './App.css';

/* ----------------COMPONENTS------------------ */
import Nav from '../../components/Nav/Nav'
import SignupCard from '../../components/Signup/Signup';
import LoginCard from '../../components/LoginCard/LoginCard';
import ShortcutList from '../../components/ShortcutList/ShortcutList';
import ChooseList from '../../components/ChooseList/ChooseList';
import AppFilter from '../../components/AppFilter/AppFilter';
import ShortcutAdd from '../../components/ShortcutAdd/ShortcutAdd';
import ShortcutEdit from '../../components/ShortcutEdit/ShortcutEdit';

/* ------------------SERVICES------------------ */
import userService from '../../utils/userService';
import shortcutService from '../../utils/shortcutService';
import myShortcutService from '../../utils/myShortcutService';

class App extends Component {
    constructor() {
        super();
        this.state = {
          user: userService.getUser(),
          myList: userService.getUser() ? userService.getUser().myList : [],
          showMyList: false,
          shortcuts: [],
          appList: ['Applications'],
          selectedShortcut: null,
          appFilter: "Show All",
          editing: false,
        };
    }

    //---------------------USER IN/OUT-----------------------------
    handleSignupOrLogin = () => {
        this.setState({user: userService.getUser(),
                      myList: userService.getUser().myList,
                      appList: this.getAppList(this.state.shortcuts)
        });
    }

    handleLogout = () => {
        userService.logout();
        this.setState({user: null,
                      myList: [],
                    appList: ['Applications']});
    }

    //----------------------STATE CHANGING---------------------------
    handleMySelector = () => {
      if (this.state.user) {
        this.setState({showMyList: true,
                      appFilter: "--Show All--",
                      appList: this.getAppList(this.state.myList)})
      }
    };

    handleAllSelector = () => {
        this.setState({showMyList: false,
                      appFilter: "--Show All--",
                      appList: this.getAppList(this.state.shortcuts)})
                      
    };

    getAppList(shortcuts) {
      let appList = ['Applications', '--Show All--'];
      shortcuts.forEach((shortcut) => {
        if (!appList.includes(shortcut.application)) {
          appList.push(shortcut.application)
        }
      });
      return appList.sort();
    };

    handleFilter = (application) => {
        this.setState({appFilter: application})
    }

    //----------------CRUD OPERATIONS-----------------------
    handleDeleteShortcut = async id => {
      await myShortcutService.deleteOne(id);
      const user = userService.getUser()
      this.setState(state => ({
        user: user,
        myList: user.myList}))
    }

    handleAddShortcut = async newShortcutData => {
      await myShortcutService.create(newShortcutData);
      const user = userService.getUser()
    this.setState(state => ({
      user: user,
      myList: user.myList}))
  }

    handleUpdateShortcut = async changes => { 
      await myShortcutService.update(changes);
      const user = userService.getUser()
      this.setState({
        user: user,
        myList: user.myList,
        editing: false,
      })
    }

    handleAddToMyList = async shortcut => {
      console.log("ADD THIS ID: ", shortcut)
      delete shortcut._id
      await myShortcutService.create(shortcut)
      const user = userService.getUser()
      this.setState(state => ({
        user: user,
        myList: user.myList}))
    }

    //-----------------SHORTCUT SELECTION--------------------------
    getSelectedShortcut = () => {
      return this.state.selectedShortcut
    }

    handleSelectShortcut = (selectedShortcut) => {
      this.resetSelectShortcut()

      this.setState({
        selectedShortcut,
        editing: true,
      })
    }

    resetSelectShortcut = () => {
      this.setState({
        selectedShortcut: null,
      })
    }


    //----------------------COMPONENT---------------------------
    async componentDidMount() {
        const shortcuts = await shortcutService.getAll();

        this.setState({
          shortcuts: shortcuts,
          appFilter: "--Show All--",
          appList: this.getAppList(shortcuts),
        });
      }

    //----------------------RENDER-----------------------------
    render() {
        return (
          <div className="whole-page">
            <div className="app-grid">
              <div className="title-bar">
              <h1>KeyKombo</h1>
              </div>
              <div className="controls">
                <AppFilter
                    applications={this.state.appList}
                    appFilter={this.state.AppFilter}
                    handleFilter={this.handleFilter}/>

                <ChooseList
                    handleAllSelector={this.handleAllSelector}
                    handleMySelector={this.handleMySelector}
                    user={(this.user ? true : false)}/>
              </div>
              <div className="left">
                <ShortcutList
                    shortcuts={this.state.showMyList ? this.state.myList : this.state.shortcuts}
                    showEdit={this.state.showMyList ? true : false}
                    handleDeleteShortcut={this.handleDeleteShortcut}
                    handleSelectShortcut={this.handleSelectShortcut}
                    handleAddToMyList={this.handleAddToMyList}
                    appFilter={this.state.appFilter}/>
                </div>

                <div className="right">
                    <Nav user={this.state.user} handleLogout={this.handleLogout}/>

                  {(!this.state.showMyList && this.state.user) ? 
                  <div>
                  <hr></hr>
                  <h2>Click Add to save a shortcut to your customized list.</h2>
                  <hr></hr>
                  <h2>Select My Shorcuts to view your saved list.</h2>
                  <hr></hr>
                  <h2>You can also add custom shortcuts to your private list.</h2>
                  </div> : ""}

                    {(!this.state.user) ?
                    <LoginCard
                        handleSignupOrLogin={this.handleSignupOrLogin} /> : ""}

                {(!this.state.user) ?
                <SignupCard
                    handleSignupOrLogin={this.handleSignupOrLogin} /> : ""}
                {(this.state.user && this.state.showMyList && !this.state.editing) ?
                <ShortcutAdd handleAddShortcut={this.handleAddShortcut} userID={this.state.user._id}/> : ""}
                {(this.state.showMyList && this.state.selectedShortcut && this.state.editing) ?
                <ShortcutEdit
                    selectedShortcut={this.state.selectedShortcut}
                    handleUpdateShortcut={this.handleUpdateShortcut}
                    handleDeleteShortcut={this.handleDeleteShortcut}
                    getSelectedShortcut={this.getSelectedShortcut}/> : ""}
              </div>
            </div>
            </div>
        );
    }
}

export default App;