import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Characters from "pages/characters";
import Login from "pages/login";
import Nomatch from "pages/nomatch";

export default function RouteConfigExample() {
    return (
        <Router>
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
        </Router>
    );
}
