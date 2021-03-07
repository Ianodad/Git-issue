import {Route, Switch, Redirect } from "react-router-dom";
import React, { Component} from "react";

import { BrowserRouter } from "react-router-dom";



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
            <Route path="/" exact component={Main} />
            <Route path="/main" exact component={Main} />
            <Route path="/main/:name" exact component={Main} />
			      <Route path="/inspection/:owner/:repo/:id" exact component={Inspection} />
            <Route path="/inspection" exact component={Inspection} />
			      <Route path="/issues" exact component={Issues} />
            <Route path="/issues/:owner/:repo" exact component={Issues} />
            <Route path ="/search/:q" exact component={Search} />
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
