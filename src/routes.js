import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import App from "pages/App";
import Characters from "pages/characters";

export default function RouteConfigExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">App</Link>
                    </li>
                    <li>
                        <Link to="/characters">Characters</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path="/">
                        <App />
                    </Route>
                    <Route path="/characters">
                        <Characters />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
