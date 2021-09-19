import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';

export default function App() {
	return (
		<div>
			<Router basename="admin">
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/users">Users</Link>
							</li>
						</ul>
					</nav>
					<Switch>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/register">
							<Register />
						</Route>
						<Route path="/">
							<h1>Home</h1>
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}
