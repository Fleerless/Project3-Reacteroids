import React, { Component } from 'react'
import axios from 'axios';
import { Button } from 'reactstrap'

export class Store extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: props.username,
            shipPrice: 500,
            bulletPrice: 4000,
            credits: null,
            rSelected: null
        }
    }

    componentDidMount(){
        // Pass in username from Home state
        // Create a post route that will send username -or- _id to the server and query mongo for user credits info
        // Set state.credits with response

      
    }

    onRadioBtnClick(rSelected) {
        axios.put('user/storeupdate').then(response => {

            console.log(response.data.colors);
            this.setState({
                rSelected: response.data.colors
            })


        })


        this.setState({ rSelected });
      }

    render(){
        return(
            <div>
                <p>Credits: {this.state.credits}</p>
                <div>
                    <h2>Purchase Ship Colors</h2>
                    <div>
                        <div>
                            <img></img>
                            <Button className='blacktext' color="primary" onClick={() => this.onRadioBtnClick({shipColor: '#ffffff', shipOutline: '#ff0000'})} active={this.state.rSelected === 1}>- {this.state.shipPrice}cr</Button>
                        </div>
                        <div>
                        <img></img>
                        <Button className='blacktext' color="primary" onClick={() => this.onRadioBtnClick({shipColor: '#FF8C00', shipOutline: '#ffffff'})} active={this.state.rSelected === 1}>- {this.state.shipPrice}cr</Button>
                        </div>
                        <div>
                        <img></img>
                        <Button className='blacktext' color="primary" onClick={() => this.onRadioBtnClick({shipColor: '#9400D3', shipOutline: '#7CFC00'})} active={this.state.rSelected === 1}>- {this.state.shipPrice}cr</Button>
                        </div>
                    </div>

                </div>
                <div>
                    <h2>Purchase Bullet Upgrade</h2>
                    <div>
                        <div>
                            <img></img>
                            <img></img>
                        </div>
                        <h4>Increase bullet size by 2</h4>
                        <Button className='blacktext' color="danger">- {this.state.bulletPrice}cr</Button>{' '}

                    </div>
                </div>

            </div>
        )
    }
}