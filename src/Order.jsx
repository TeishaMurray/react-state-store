import React, { Component } from 'react'

export default class Order extends Component {
    render() {
        return (
            <div>
               <li>{this.props.item.item}{this.props.item.quantity}</li> 
            </div>
        )
    }
}
