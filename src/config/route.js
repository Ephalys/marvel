import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Comics from "pages/characters/comics";
import Login from "pages/login/login";
import Nomatch from "pages/nomatch/nomatch"
import PrivateRoute from "config/private-route";

const Router = () => {
    const loggedIn = localStorage.getItem('token');

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    {loggedIn ? <Redirect to="/comics" /> : <Login />}
                </Route>
                <PrivateRoute  path="/comics"  component={Comics}  exact  />
                <Route path="*">
                    <Nomatch />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;