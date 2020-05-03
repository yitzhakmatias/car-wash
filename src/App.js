import React from 'react';

import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import UserView from './users/pages/UserView'
import OwnerView from "./owner/pages/OwnerView";
import MainNavigation from "./shared/components/Navigation/MainNavigation";


const App = () => {
    return (
        <Router>
            <MainNavigation/>
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
