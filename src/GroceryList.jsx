import React, { Component } from 'react'

export default class GroceryList extends Component {
    state = {
        isPurchased: false
    }
    render() {
        return (
            <div>
                <ul onClick={() => this.props.handlePurchase(this.props.groceries)}>
               {this.props.groceries.item} 
               {this.props.groceries.brand}
               {this.props.groceries.units}
               {this.props.groceries.quantity}
               {this.props.groceries.isPurchased}
               </ul>
            </div>
        )
    }
}
