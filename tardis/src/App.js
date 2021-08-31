import React, { Component } from 'react'
import './App.css'
import DivOne from './DivOne'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tardis: {
        name: 'Time and Relative Dimension in Space',
        caps: false
      }
    }
  }

 changeIt = () => {
    if (this.state.tardis.caps === true) {
      this.setState({
        tardis: {
          name: this.state.tardis.name.toLowerCase(),
          caps: false
        }
      })
    } else {
      this.setState({
        tardis: {
          name: this.state.tardis.name.toUpperCase(),
          caps: true
        }
      })
    }
    // console.log(this.state)
  }


  render() {

    console.log(this.state);

    return (
      <div>
        {/* <h3 onClick="changeIt">{this.state.tardis.name}</h3> */}
        <DivOne divOneTardis={this.state.tardis.name} onNewDiv={this.onClick}/>
        
      </div>

    )
  }
}


