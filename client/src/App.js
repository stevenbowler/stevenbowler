//@ts-check
/**@module 
 * @requires react
 * @requires react-router-dom
 * @requires bootstrap
 * @requires axios
 * @requires react-redux
 * @requires redux
 * @requires redux-devtools-extension
 * @requires module:client/src/pages/Books
 * @requires module:client/src/pages/Detail
 * @requires module:client/src/pages/NoMatch
 * @requires module:client/src/components/AppNavbar/index
 * @requires module:client/src/components/RegisterModal/index
 * @requires module:client/src/components/LoginModal/index
 * @requires module:client/src/components/ExtraModal/index
*/
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { resetUser, login } from './redux/actionCreator';

import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";

import AppNavbar from './components/AppNavbar';
import RegisterModal from './components/RegisterModal';
import LoginModal from './components/LoginModal';
import ExtraModal from './components/ExtraModal';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




// set background color below navbar
//@ts-ignore
document.body.style = 'background: black;';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
  }


  // LIFECYCLE METHODS and related support functions

  /**
   * @function componentDidMount
   */
  componentDidMount() {
    if (!localStorage["name"] || localStorage.getItem("name") === "Guest...Login") {
      this.props.dispatch(resetUser());    // on load, reset all user settings, only when not already set
    } else {
      console.log("sessionStorage.name already exists and logged-in");
      this.props.dispatch(login({
        username: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        token: localStorage.getItem("token"),
        loggedIn: localStorage.getItem("loggedIn")
      }));    // on load, reset all user settings, only when not already set
    }
  }

  // getSnapshotBeforeUpdate(prevprops, prevstate) {}


  render() {
    return (
      <Router>
        <div ref={this.wrapper}>
          <AppNavbar />
          <LoginModal />
          <RegisterModal />
          <ExtraModal />
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route exact path="/books" render={(props) => <Books {...props} />} />
            <Route exact path="/contact" render={(props) => <Contact {...props} />} />
            <Route exact path="/about" render={(props) => <About {...props} />} />
            <Route exact path="/books/:id" render={(props) => <Detail {...props} />} />
            <Route render={(props) => <NoMatch {...props} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    email: state.email,
    token: state.token,
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(App);

