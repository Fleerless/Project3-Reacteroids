import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Transition } from "react-transition-group";
import Login from "../home/components/LogIn";
import SignUp from "../home/components/SignUp";


const startState = { autoAlpha: 0, y: -50 };

export class Home extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            show: props.show,
            isShowSignup: false,


        }
        

    }
    

    openSignup = event => {
        event.preventDefault()
        this.setState({
            isShowSignup: true
        })
    }

    closeSignup = event => {
        event.preventDefault();
        this.setState({
            isShowSignup: false
        })
    }
    render() {
        return (

            <container
                
                
            >
                <div>


                    {/* THIS IS THE CODE IN THE MAIN PANEL */}

                    <div className="wrapper">
                        <section className="hero">
                            <div className="inner">
                                <div className="loginUser">
                                    {this.state.isShowSignup ?
                                        <SignUp closeSignup={this.closeSignup} updateUser={this.props.updateUser} /> :
                                        <Login openSignup={this.openSignup} updateUser={this.props.updateUser} />
                                    }
                                </div>
                            </div>
                            <div className="playGameLink">
                                <Link to="/game" className="playGameLink"><h2>Play Now</h2></Link>

                            </div>
                        </section>

                        {/* THIS IS ALL THE CODE IN THE ASIDE */}

                        <section className="siderbar">
                            <div className="inner">
                                <div className="clipper">
                                    <h2>Project Team Details:</h2>
                                </div>
                                <div className="anim-panel">
                                    <ul>
                                        <li>Project Focuses</li>
                                        <li>Team Member Portfolio Links</li>
                                    </ul>
                                    <button><Link to="/patch" className="read-btn">CLICK HERE</Link></button>
                                </div>
                            </div>
                        </section>
                        <section className="subscribe">
                            <div className="inner">
                                <div className="clipper">
                                    <h2>high scores</h2>
                                </div>

                                <div className="anim-panel">
                                    <div>
                                        <p></p>
                                    </div>
                                    <button><Link to="/scores" className="cta">CLICK FOR HIGH SCORES</Link></button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </container>)
    }
}