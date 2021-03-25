import {Route, Switch, Redirect } from "react-router-dom";
import React, { Component} from "react";

import { BrowserRouter } from "react-router-dom";
import ProtectedRoute from "../src/components/Auth/ProtectedRoute";



// Page Component 
import Auth from "./pages/Auth";
import Main from "./pages/Dashboard/Main"
import Issues from "./pages/Dashboard/Issues";
import Inspection from "./pages/Dashboard/Inspection";
import Search from "./pages/Dashboard/Search";

import NotFound from "./pages/NotFound";





class App extends Component {


	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
        super(props);

    }

	render() {
		return (
      <>
        <BrowserRouter>
          {/* <Router history={history}> */}
          <Switch>
            <ProtectedRoute path="/" exact component={Main} />
            {/* <Route path="/" exact component={Main} /> */}
            <ProtectedRoute path="/main" exact component={Main} />
            <ProtectedRoute path="/main/:name" exact component={Main} />
			      <ProtectedRoute path="/inspection/:owner/:repo/:id" exact component={Inspection} />
            <ProtectedRoute path="/inspection" exact component={Inspection} />
			      <ProtectedRoute path="/issues" exact component={Issues} />
            <ProtectedRoute path="/issues/:owner/:repo" exact component={Issues} />
            <ProtectedRoute path ="/search/:q" exact component={Search} />
            <Route path="/auth" exact component={Auth} />
            <Route path="/notFound" component={NotFound} />
            <Redirect to="/notFound" />
          </Switch>
          {/* </Router> */}
        </BrowserRouter>
      </>
    );
	}
}

export default App;
