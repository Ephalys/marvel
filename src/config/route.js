import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Characters from "pages/characters/characters";
import Login from "pages/login/login";
import Nomatch from "pages/nomatch/nomatch"
import PrivateRoute from "config/private-route";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <PrivateRoute  path="/characters"  component={Characters}  exact  />
                <Route path="*">
                    <Nomatch />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;