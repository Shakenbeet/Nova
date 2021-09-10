import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Apps from "./pages/Apps";
import Account from "./pages/Account";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/games" component={Games}/>
                <Route path="/apps" component={Apps}/>
                <Route path="/account" component={Account}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;