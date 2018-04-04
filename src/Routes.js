import React from 'react';
import{
  BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/SignUp'
import UserHome from './components/UserHome'


export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/user" component={UserHome}/>
        </Switch>
    </Router>
);
