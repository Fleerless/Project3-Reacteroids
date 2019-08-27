import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import '../App.css';
import axios from 'axios'




class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            redirectTo: null   



        }
        this.logout = this.logout.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    redirect(route){
        this.setState({
            redirectTo: route
        })
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
            }
        }).catch(error => {
            console.log(error)

        })
        .then(() => {
            this.setState ({ redirectTo: '/'})
        })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
        return (
            <div>
                <div className="navbackground">

                    <header>
                        <a href="/" className="Logo">PROJECT ASTEROIDS</a>
                        <nav>
                            <ul>
                                <li><Link className="btn gsap-btn blacktext" to="/">Home</Link></li>
                                <li><Link className="btn gsap-btn blacktext" to="/game">Game</Link></li>
                                <li><Link className="btn gsap-btn blacktext" to="/store">Store</Link></li>
                                <li><Link className="btn gsap-btn blacktext" to="/scores">High Scores</Link></li>
                                <li><a className="btn gsap-btn blacktext" href="/" onClick={this.logout}>Log Out</a></li>
                            </ul>
                        </nav>
                    </header>
                </div>
            </div>

        );
        }
    }
}


export default Navbar