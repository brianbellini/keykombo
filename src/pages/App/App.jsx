import React, {Component} from 'react';
// import {Route} from 'react-router-dom';
import './App.css';

/* ----------------COMPONENTS------------------ */
import Nav from '../../components/Nav/Nav'
import SignupCard from '../../components/Signup/Signup';
import LoginCard from '../../components/LoginCard/LoginCard';
import ShortcutList from '../../components/ShortcutList/ShortcutList';
import MasterShortcuts from '../../components/MasterShortcuts/MasterShortcuts';
import AppFilter from '../../components/AppFilter/AppFilter';

/* ------------------PAGES------------------ */
import ShortcutAddPage from '../ShortcutAddPage/ShortcutAddPage';
import ShortcutEditPage from '../ShortcutEditPage/ShortcutEditPage';

/* ------------------SERVICES------------------ */
import userService from '../../utils/userService';
import shortcutService from '../../utils/shortcutService';
import myShortcutService from '../../utils/myShortcutService';


class App extends Component {
    constructor() {
        super();
        this.state = {
          user: userService.getUser(),
          myList: userService.getUser().myList,
          showMyList: false,
          shortcuts: [],
          appList: ['Applications'],
          selectedShortcut: null,
        };
    }

    handleSignupOrLogin = () => {
      this.setState({user: userService.getUser(),
                    myList: userService.getUser().myList
                  });
    }

    handleLogout = () => {
      userService.logout();
      this.setState({user: null,
                    myList: []});
    }

    handleAddShortcut = async newShortcutData => {
        await myShortcutService.create(newShortcutData);
        this.setState({myList: this.state.user.myList});  //TRIED THIS
    }

    handleMySelector = () => {
      if (this.state.user) {
        this.setState({showMyList: true})
      }
    };

    handleAllSelector = () => {
        this.setState({showMyList: false})
    };

    getAppList(shortcuts) {
      let appList = [];
      shortcuts.forEach((shortcut) => {
        if (!appList.includes(shortcut.application)) {
          appList.push(shortcut.application)
        }
      });
      return appList.sort();
    };

    handleDeleteShortcut = async id => {
      await myShortcutService.deleteOne(id);
      this.setState(state => ({
        myList: this.state.user.myList}))
    }

    handleUpdateShortcut = async id => {
      await myShortcutService.update(id);
      this.setState(state => ({
        selectedShortcut: null,
        
      }))
    }

    handleSelectShortcut = (selectedShortcut) => {
      this.setState({
        selectedShortcut
      })
    }

    async componentDidMount() {
        const shortcuts = await shortcutService.getAll();

        this.setState({
          shortcuts: shortcuts,
   
          appList: this.getAppList(shortcuts),
        });
      }

    render() {
        return (
            <div className="App">
                <AppFilter applications={this.state.appList}/>
                <MasterShortcuts
                  handleAllSelector={this.handleAllSelector}
                  handleMySelector={this.handleMySelector}/>
                <Nav user={this.state.user} handleLogout={this.handleLogout}/>
                <ShortcutList
                    shortcuts={this.state.showMyList ? this.state.myList : this.state.shortcuts}
                    showDelete={this.state.showMyList ? true : false}
                    handleDeleteShortcut={this.handleDeleteShortcut}
                    handleSelectShortcut={this.handleSelectShortcut}/>

                <LoginCard
                    handleSignupOrLogin={this.handleSignupOrLogin} />
                <SignupCard
                    handleSignupOrLogin={this.handleSignupOrLogin} />
                {(this.state.user && this.state.showMyList) ?
                <ShortcutAddPage handleAddShortcut={this.handleAddShortcut} userID={this.state.user._id}/> :
                ""}
                {(this.state.showMyList && this.state.selectedShortcut) ?
                <ShortcutEditPage selectedShortcut={this.state.selectedShortcut} />
                :
                ""}
              
            </div>
        );
    }
}

export default App;