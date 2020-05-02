import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import UserView from './users/pages/UserView'
import OwnerView from "./owner/pages/OwnerView";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <UserView/>
                </Route>
                <Route path="/users" exact>
                    <UserView/>
                </Route>
                <Route path="/owners">
                    <OwnerView/>
                </Route>
                <Redirect to="/"/>
            </Switch>
        </Router>
    );
};

export default App;
