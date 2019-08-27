import React, { Component } from "react";

export class Logout extends Component {
    state = {
    };

    componentDidMount(){
        this.props.updateUser({
            loggedIn: false,
            username: null,
            bulletCount: null,
            bulletSize: null,
            credits: null,
            highScore: null,
            shipColor: null,
            shipCount:null,
            shipOutline: null
        })
    }

    render() {
        return (
            <div>
            <h2>You have Logged out</h2>
            </div>
        );
    }
  }

  