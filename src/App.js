import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    num1: 0,
    num2: 0
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {

    const { num1, num2
    } = this.state
    return (
      <div style={{ display: 'flex', flexDirection: 'column', width: '400px', margin: 'auto' }}>
        <p style={{ margin: '10px' }}>
          Number 1
</p>
        <div className="input-feild">

          <input name={'num1'} value={num1} onChange={this.handleChange} />
          <p style={{ margin: '10px' }}>
            Number 2
</p>
          <input name={'num2'} value={num2} onChange={this.handleChange} />
        </div>
        <div style={{ display: 'flex ', justifyContent: 'space-evenly', margin: '10px' }}>
          <button style={{ border: 'none', backgroundColor: "#858AE3", color: 'white', padding: '15px 32px', textAlign: 'center', fontSize: '20px', margin: '4px 2px' }} onClick={() => {
            const number1 = parseInt(num1);
            const number2 = parseInt(num2)

            let total = number1 + number2
            this.setState({ total: total })

          }} >+</button>
          <button style={{ border: 'none', backgroundColor: "#613DC1", color: 'white', padding: '15px 32px', textAlign: 'center', fontSize: '20px', margin: '4px 2px' }} onClick={() => {
            const number1 = parseInt(num1);
            const number2 = parseInt(num2)

            let total = number1 - number2
            this.setState({ total: total })

          }}>-</button>
          <button style={{ border: 'none', backgroundColor: "#4E148C", color: 'white', padding: '15px 32px', textAlign: 'center', fontSize: '20px', margin: '4px 2px' }} onClick={() => {
            const number1 = parseInt(num1);
            const number2 = parseInt(num2)

            let total = number1 * number2
            this.setState({ total: total })

          }}>X</button>
          <button style={{ border: 'none', backgroundColor: "#2C0735", color: 'white', padding: '15px 32px', textAlign: 'center', fontSize: '20px', margin: '4px 2px' }} onClick={() => {
            const number1 = parseInt(num1);
            const number2 = parseInt(num2)

            let total = number1 / number2
            this.setState({ total: total })

          }}>/</button>



        </div>
        <p style={{ border: 'solid black 1px', padding: '10px', margin: '10px ', borderRadius: '5px' }}>

          {this.state.total}
        </p>

      </div >
    )
  }
}