import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// components
import { Home } from "./components/Pages/home/home";
import { Scores } from "./components/Pages/scores/scores";
import { Patch } from "./components/Pages/patch/patch";
import { Store } from "./components/Pages/store/Store"
import Navbar from "./components/Navbar";
import Reacteroids from './components/Pages/game/Reacteroids'
import axios from 'axios';
import './style.css';




class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			username: null,
			highScore: null,
			credits: null,
			shipColor: null,
			shipCount: null,
			shipOutline: null,
			bulletSize: null,
			bulletCount: null


		}

		this.getUser = this.getUser.bind(this)
		this.componentDidMount = this.componentDidMount.bind(this)
		this.updateUser = this.updateUser.bind(this)
	}
	componentDidMount() {
	}

	updateUser(userObject) {
		this.setState(userObject)
	}

	getUser() {
		axios.get('/user/').then(response => {
			console.log('Get user response: ')
			console.log(response.data)
			if (response.data.user) {
				console.log('Get User: There is a user saved in the server session: ')

				this.setState({
					loggedIn: true,
					username: response.data.user.username,
					highScore: response.data.user.highScore,
					credits: response.data.user.credits,
					shipColor: response.data.user.shipColor,
					shipCount: response.data.user.shipCount,
					shipOutline: response.data.user.shipOutline,
					bulletSize: response.data.user.bulletSize,
					bulletCount: response.data.user.bulletCount
					
					

				})
			} else {
				console.log('Get user: no user');
				this.setState({
					loggedIn: false,
					username: null

				})
			}
		})
	}




	render() {
		return (

				<div className='container'>
					<BrowserRouter>
						<div className="row">

						
							{/* MENU */}
							<Navbar/>


							{/* CONTENT */}
							<div className="col-12">
							<Switch>
								<Route exact path="/" >
									{({ match }) =><Home show={match !== null} updateUser={this.updateUser} />}
								</Route>

								<Route  exact path="/game">
									{({ match }) => <Reacteroids show={match !== null} shipColor={this.state.shipColor} highScore={this.state.highScore} shipOutline={this.state.shipOutline} bulletSize={this.state.bulletSize} />}
								</Route>
								<Route exact path="/scores">
									{({ match }) => <Scores show={match !== null} />}
								</Route>
								<Route exact path="/patch">
									{({ match }) => <Patch show={match !== null} />}
								</Route>
								<Route exact path="/store">
									{({ match }) => <Store show={match !== null} />}
								</Route>
							</Switch>
							</div>

						</div>
					</BrowserRouter>
				</div>
		);
	}
}

export default App;
