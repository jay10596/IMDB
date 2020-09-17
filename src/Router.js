import React from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function Router() {
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about/:id' component={About} />

                    {/* Redirect to Error Page if the url is invalid i.e=page doesn't exits
                        <Route path="*" component={Error} />
                     */}

                    {/* Redirect to home if url is invalid */}
                    <Route render={() => <Redirect to={{pathname: "/"}} />} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router