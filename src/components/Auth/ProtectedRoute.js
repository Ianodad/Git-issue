import React, { useEffect, useState } from 'react'
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { authActions } from "../../_actions";



// import githubApi from "../../api/githubApi";
const { getUserState }= authActions

const ProtectedRoute = ({ path, component: Component, render, user, getUserState, ...rest}) => {

	const [userState, setUser] = useState(false);

	useEffect(() => {
		getUserState()
		setUser(JSON.parse(localStorage.getItem("USER")))
	}, [getUserState])
	console.log(user.login)
	return (
		<Route
			{...rest}
			path={path}
			render={props => {
				if (!JSON.parse(localStorage.getItem("USER"))) return <Redirect to='/auth' />;
				return Component ? <Component {...props} /> : render(props);
			}}
		/>
	);
};

const mapStateToProps = state => ({
  user: state.auth.user
});
export default connect(mapStateToProps, { getUserState })(ProtectedRoute);

