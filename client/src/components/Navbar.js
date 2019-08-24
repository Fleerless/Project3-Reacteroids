import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import '../App.css';
import axios from 'axios'




class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            redirectTo: null   



        }
        this.logout = this.logout.bind(this)
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
                                <li><a className="btn gsap-btn blacktext" href="/">Home</a></li>
                                <li><a className="btn gsap-btn blacktext" href="/game">Game</a></li>
                                <li><a className="btn gsap-btn blacktext" href="/store">Store</a></li>
                                <li><a className="btn gsap-btn blacktext" href="/scores">High Scores</a></li>
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