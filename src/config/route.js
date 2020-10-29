import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Characters from "pages/characters/characters";
import Login from "pages/login/login";
import Nomatch from "pages/nomatch/nomatch"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/characters">
                    <Characters />
                </Route>
                <Route path="*">
                    <Nomatch />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;