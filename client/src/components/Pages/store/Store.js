import React, { Component } from 'react'
import axios from 'axios';
import { Button } from 'reactstrap'
import Image from 'react-bootstrap/Image'

export class Store extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: null,
            credits: null,
            shipCount: null,
            shipPrice: 100,
            shipColor: null,
            shipOutline: null,
            shipCost: null,
            bulletCount: null,
            bulletPrice: 250,
            bulletSize: 2,
            bulletCost: null
        }
        this.updateCosts = this.updateCosts.bind(this)

    }

    componentDidMount(){
        this.setState({
            credits: this.props.credits,
            username: this.props.username,
            shipCount: this.props.shipCount,
            bulletCount: this.props.bulletCount,
            bulletSize: this.props.bulletSize
        })
        setTimeout(this.updateCosts, 500)
    }

    updateCosts(){
        let bulletCost = this.state.bulletPrice * this.props.bulletCount;
        let shipCost = this.state.shipPrice * this.props.shipCount;
        this.setState({
            bulletCost: bulletCost,
            shipCost: shipCost
        })
    }

    buyShip(colorsObject){
        let shipCost = this.state.shipPrice * this.state.shipCount;
        if (this.state.credits >= shipCost){
            let newCredits = this.state.credits - shipCost;
            let newShipCount = this.state.shipCount + 1;
            this.props.updateUser({
                credits: newCredits,
                shipCount: newShipCount,
                shipOutline: colorsObject.shipOutline,
                shipColor: colorsObject.shipColor
            })
            shipCost = this.state.shipPrice * newShipCount;
            this.setState({
                credits: newCredits,
                shipColor: colorsObject.shipColor,
                shipOutline: colorsObject.shipOutline,
                shipCost: shipCost,
                shipCount: newShipCount
            });
            let updateShip = {
                username: this.state.username,
                shipOutline: colorsObject.shipOutline,
                shipColor: colorsObject.shipColor,
                newCredits: newCredits,
                newShipCount: newShipCount
    
            }
            axios.post('/user/storeupdate/buyship', updateShip)
            .then(response => {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    };

    buyBullet(){
        let bulletCost = this.state.bulletPrice * this.state.bulletCount;
        if (this.state.credits >= bulletCost){
            let newCredits = this.state.credits - bulletCost;
            let newBulletSize = this.state.bulletSize + 2;
            let newBulletCount = this.state.bulletCount + 1;
            this.props.updateUser({
                credits: newCredits,
                bulletCount: newBulletCount,
                bulletSize: newBulletSize
            })
            bulletCost = this.state.bulletPrice * newBulletCount;
            this.setState({
                credits: newCredits,
                bulletCost: bulletCost,
                bulletSize: newBulletSize,
                bulletCount: newBulletCount
    
            });
            let updateBullet = {
                username: this.state.username,
                bullet: newBulletSize,
                newCredits: newCredits,
                newBulletCount: newBulletCount
            }
            axios.post('/user/storeupdate/buybullet', updateBullet)
            .then(response => {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    render(){
        return(
            <div>
                {this.props.credits ?
                <>
                <p>User Name: {this.props.username}</p>
                <p>Credits: {this.props.credits}</p>
                </> :
                <p>User Name: Please Login!</p>
                }
                <div>
                    <h2>Purchase Ship Colors</h2>
                    <div className='buy-ship'>
                        <div className='ship-div'>
                            <Image src={require('./images/redShip.png')} className='ship-image' />
                            <Button className='blacktext' color="primary" onClick={() => this.buyShip({shipColor: '#ffffff', shipOutline: '#ff0000'})} active={this.state.rSelected === 1}>-{this.state.shipCost} cr</Button>
                        </div>
                        <div className='ship-div'>
                            <Image src={require('./images/orangeShip.png')} className='ship-image' />
                            <Button className='blacktext' color="primary" onClick={() => this.buyShip({shipColor: '#FF8C00', shipOutline: '#ffffff'})} active={this.state.rSelected === 1}>-{this.state.shipCost} cr</Button>
                        </div>
                        <div className='ship-div'>
                        <Image src={require('./images/purpleShip.png')} className='ship-image' />
                        <Button className='blacktext' color="primary" onClick={() => this.buyShip({shipColor: '#9400D3', shipOutline: '#7CFC00'})} active={this.state.rSelected === 1}>-{this.state.shipCost} cr</Button>
                        </div>
                    </div>

                </div>
                <div>
                    <h2>Purchase Bullet Upgrade</h2>
                    <div>
                        <div className='buy-bullet'>
                            <h4>Increase bullet size to {this.state.bulletSize + 2}</h4>
                            <Button className='blacktext' onClick={() => this.buyBullet()} color="danger">- {this.state.bulletCost}cr</Button>{' '}
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}