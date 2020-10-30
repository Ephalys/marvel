import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import App from "pages/App";
import Comics from "pages/comics";

export default function RouteConfigExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">App</Link>
                    </li>
                    <li>
                        <Link to="/comics">Comics</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path="/">
                        <App />
                    </Route>
                    <Route path="/comics">
                        <Comics />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
