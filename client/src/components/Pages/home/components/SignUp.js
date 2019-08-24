import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Input from '../../../Form/Input';
import SubmitButton from "../../../Form/Button"
import MyModal from '../../../Form/MyModal'

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			password2: '',
			confirmPassword: '',
			heading: '',
			message: '',
			modalDisplay: false,
			redirectTo: null

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	closeModal = event => {
		event.preventDefault()
		this.setState({
			modalDisplay: false
		})
	}
	
	
	handleSubmit(event) {
		event.preventDefault()

		if(this.state.username.length === 0 || this.state.password.length === 0 || this.state.password2 === 0){
			this.setState({
				message: "Please, fill out all fields",
				heading: "FORM ERROR",
				modalDisplay: true
			})
		} else if (this.state.password2 !== this.state.password){
			this.setState({
				message: "Passwords don't match",
				heading: 'PASSWORD ERROR',
				modalDisplay: true
			})
		} else if (this.state.password.length < 6 || this.state.password2.length < 6){
			this.setState({
				message: "Make password longer than 6 characters",
				heading: 'PASSWORD ERROR',
				modalDisplay: true
			})
		} else {
			localStorage.setItem("username", this.state.username)
			//request to server to add a new username/password
			axios.post('/user/', {
				username: this.state.username,
				password: this.state.password
			})
				.then(response => {
					console.log(response)
					if (!response.data.errmsg) {
						console.log('successful signup')
						this.setState({ //redirect to login page
							redirectTo: '/'
						})
						this.props.closeSignup()
					} else {
						console.log('username already taken')
					}
				}).catch(error => {
					console.log('signup error: ', error)	
				})

		}
	}

	toggle = event => {
		event.preventDefault()
		this.setState({
			modalDisplay: true
		})
	}


render() {
	if (this.state.redirectTo) {
		return <Redirect to={{ pathname: this.state.redirectTo }} />
	} else {
	return (
		<div>
			<MyModal
				message={this.state.message}
				heading={this.state.heading} 
				close={this.closeModal}
				open={this.state.modalDisplay}
				/> 
			{/* <Example/> */}
			<div className="SignupForm">
				<h4>Sign up</h4>
				<form className="form-horizontal">
					<Input 
					type="text"
					id="username" 
					placeholder="Username" 
					label="Username"
					name="username"
					value={this.state.username}
					onChange={this.handleChange} 
					/>
					<Input
					type="password"
					id="password"
					placeholder="Password"
					label="Password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
					/>
					<h7>Re-Enter Password:</h7>
					<Input
					type="password"
					id="password2"
					placeholder="Password"
					name="password2"
					value={this.state.password2}
					onChange={this.handleChange}
					/>
					<SubmitButton 
					className="btn btn-primary col-1 col-mr-auto"
					onClick={this.handleSubmit}
					type="submit"
					text="Sign Up"
					/>
					<SubmitButton 
					className="btn btn-primary col-1 col-mr-auto"
					onClick={this.props.closeSignup}
					type=""
					text="Return to Login"
					/>
				</form>
			</div>
		</div>

	)}}
}


export default Signup
