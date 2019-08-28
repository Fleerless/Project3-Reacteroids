import React, { Component } from 'react'
import axios from 'axios';
import { Button } from 'reactstrap'
import Image from 'react-bootstrap/Image'

export class Store extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: null,
            shipPrice: 500,
            bulletPrice: 4000,
            credits: null,
            shipColors: null
        }
    }

    componentDidMount(){
        this.setState({
            credits: this.props.credits,
            username: this.props.username
        })

      
    }

    buyShip(colorsObject){
        this.setState({
            shipColors: colorsObject
        })
    }

    onRadioBtnClick(colorsObject) {
        this.setState({
            shipColors: colorsObject
        })
        axios.put('user/storeupdate').then(response => {

            console.log(response.data.colors);


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