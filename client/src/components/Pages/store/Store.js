import React, { Component } from 'react'
import axios from 'axios';
import { Button } from 'reactstrap'
import Image from 'react-bootstrap/Image'

export class Store extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: null,
            shipCount: null,
            shipPrice: 500,
            bulletCount: null,
            bulletPrice: 4000,
            credits: null,
            shipColors: null
        }
    }

    componentDidMount(){
        this.setState({
            credits: this.props.credits,
            username: this.props.username,
            shipCount: this.props.shipCount,
            bulletCount: this.props.bulletCount
        })


    }

    buyShip(colorsObject){
        let shipCost = this.state.shipPrice * this.state.shipCount;
        let newCredits = this.state.credits - shipCost;

        this.props.updateUser(colorsObject);
        this.props.updateUser({
            credits: newCredits,
            shipCount: this.state.shipCount++
        })
        this.setState({
            credits: newCredits,
            shipColors: colorsObject
        });
        let updateShip = {
            
        }
        axios.post('/user/storeupdate', this.state.shipColor)
        .then(response => {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    onRadioBtnClick(colorsObject) {
        this.setState({
            shipColors: colorsObject
        })
    }

    render(){
        return(
            <div>
                <p>Credits: {this.props.credits}</p>
                <div>
                    <h2>Purchase Ship Colors</h2>
                    <div>
                        <div>
                            <Image src={require('./images/redShip.png')} className='ship-image' />
                            <Button className='blacktext' color="primary" onClick={() => this.buyShip({shipColor: '#ffffff', shipOutline: '#ff0000'})} active={this.state.rSelected === 1}>-{this.state.shipPrice} cr</Button>
                        </div>
                        <div>
                            <Image src={require('./images/orangeShip.png')} className='ship-image' />
                            <Button className='blacktext' color="primary" onClick={() => this.buyShip({shipColor: '#FF8C00', shipOutline: '#ffffff'})} active={this.state.rSelected === 1}>-{this.state.shipPrice} cr</Button>
                        </div>
                        <div>
                        <Image src={require('./images/purpleShip.png')} className='ship-image' />
                        <Button className='blacktext' color="primary" onClick={() => this.buyShip({shipColor: '#9400D3', shipOutline: '#7CFC00'})} active={this.state.rSelected === 1}>-{this.state.shipPrice} cr</Button>
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