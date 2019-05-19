import React, { Component } from 'react';
import './App.css';


import {HashRouter, Switch, Route} from "react-router-dom"
import SmartQuestionsList from "./view/SmartQuestionsList";
import SmartCreateQuestion from "./view/SmartCreateQuestion";
import SmartSearchedQuestion from "./view/SmartSearchedQuestion";
import SmartSearchedQuestionByTag from "./view/SmartSearchedQuestionByTag";
import SmartCreateUser from "./view/SmartCreateUser";
import SmartLogin from "./view/SmartLogin";

class App extends Component {
  render() {
    return (
      <div className="App">
          <HashRouter>
              <Switch>
                  <Route exact={true} component={SmartLogin} path="/"/>
                  <Route exact={true} component={SmartQuestionsList} path="/home"/>
                  <Route exact={true} component={SmartCreateQuestion} path="/create-question"/>
                  <Route exact={true} component={SmartCreateUser} path="/create-user"/>
                  <Route exact={true} component={SmartSearchedQuestion} path="/search-title"/>
                  <Route exact={true} component={SmartSearchedQuestionByTag} path="/search-tag"/>


              </Switch>
          </HashRouter>
      </div>
    );
  }
}

export default App;
