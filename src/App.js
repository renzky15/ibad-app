import React, {Component} from 'react';
import IBad from './components/IBad';
import LoginAdmin from './components/LoginAdmin';
import Employer from './Employer/Employer';
import Login from './Login/Login';
import NotFoundPage from './components/NotFoundPage';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

export default class App extends Component {
  render() {
    return(
      <Router>
      <Switch>

        <div>
        <Route path="/" component = {IBad} exact = {true}/>
          <Route path="/loginAdmin" render ={(props)=> (
            <LoginAdmin {...props}/> 
          )}
          />

          <Route path="/login" exact={true} render ={(props)=> (
            <Login {...props}/> 
          )}
          />
          
          <Route path="/employer" component = {Employer} />
          
          {/* <Route component = {NotFoundPage}  /> */}
        </div>

      </Switch>
      </Router>
    )
  }
} 