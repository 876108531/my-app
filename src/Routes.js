import React from 'react';
import { Switch, Route } from 'react-router'
import { BrowserRouter as Router, Link } from "react-router-dom";
// import createBrowserHistory from 'history/createBrowserHistory'

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
// import App from "./App";

// const history = createBrowserHistory()
// const history = browserHistory;
const Routes = () => (
    <Router>
        <Route path="/" component={App}>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route component={NotFound} />
            </Switch>
        </Route>
    </Router>
);

export default Routes;

const App = ({ children }) => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <div>{children}</div>
        </div>
    )
}