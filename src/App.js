import React, { Component } from 'react'
import groceries from "./Groceries"
import GroceryList from "./GroceryList"
import Order from "./Order"
import "./App.css"

// console.table(groceries)

export default class App extends Component {

  state = {
    groceries: groceries,
    item: "",
    brand: "",
    units: "",
    quantity: 0,
    isPurchased: false,
    purchasedItems: []
  };

  handleChange = (event) => {
    // console.log(event.target)
    this.setState({
      // item: event.target.value,
      // brand: event.target.value,
      // units: event.target.value,
      // quantity: event.target.value
      [event.target.id]: event.target.value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      item: this.state.item,
      brand: this.state.brand,
      units: this.state.units,
      quantity: this.state.quantity,
      isPurchased: this.state.isPurchased
    };
    // console.log("we are inside handleSubmit this is our new item")
    this.setState({
      item: " ",
      brand: " ",
      units: " ",
      quantity: 0,
      isPurchased: false,
      groceries: [newItem, ...this.state.groceries],
    });
  };

  addToOrder = (item) => {
    this.setState({
      purchasedItems: [item, ...this.state.purchasedItems],
      isPurchased: true
    });
  };

  render() {
    return (
      <div className="outerdiv">
        <div className="header"><h2>My Grocery List</h2></div>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <div className="itemdiv">
              <label htmlFor="item">Item: </label>
              <input className="field"
                type="text"
                value={this.state.item}
                onClick={() => this.setState({ item: " " })}
                onChange={this.handleChange}
                id="item"
              />
            </div>

            <div className="itemdiv">
              <label htmlFor="brand">Brand: </label>
              <input className="field"
                type="text"
                value={this.state.brand}
                onClick={() => this.setState({ brand: " " })}
                onChange={this.handleChange}
                id="brand"
              />
            </div>
            <div className="itemdiv">
              <label htmlFor="units">Units: </label>
              <input className="field"
                type="text"
                value={this.state.units}
                onClick={() => this.setState({ units: " " })}
                onChange={this.handleChange}
                id="units"
              />
            </div>
            <div className="itemdiv">
              <label htmlFor="quantity">Qty: </label>
              <input className="field"
                type="number"
                value={this.state.quantity}
                onClick={() => this.setState({ quantity: " " })}
                onChange={this.handleChange}
                id="quantity"
              />
            </div>
            <input type="submit" className="button" />
          </form>
        </div>

        <div className="purchased">
          {
            this.state.groceries.map((groceries, index) => {
              return (
                <ul>
                  <GroceryList key={index} groceries={groceries} handlePurchase={this.addToOrder} />

                </ul>


              )
            })
          }

        </div>
        <div className="purchased">
          <div className="header"><h2>Purchased</h2></div>
          <ul>
            {
              this.state.purchasedItems.map((item, index) => {
                return (
                  <Order key={index} item={item} />
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
