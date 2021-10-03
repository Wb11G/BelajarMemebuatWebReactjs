
import React from "react";
import {BrowserRouter as Router, Route, Switch}  from "react-router-dom";
import Eror from "./Containers/404";
import Login from "./Containers/login";
import LupaPassword from "./Containers/LupaPassword";
import Register from "./Containers/register";

const App=()=>{
return(
    <Router>
        <Switch>
        <Route path="/register" component={Register}/>
        <Route path="/login " component={Login}/>
        <Route path="/lupaPassword" component={LupaPassword}/>
        <Route component={Eror}/>
        </Switch>
    </Router>
)
}

export default App;