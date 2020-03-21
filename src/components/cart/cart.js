import React from 'react'

class Cart extends React.Component {

  render() {
    return (
        <div className="innerBox">
          <center><h4>Cart</h4></center>
          {this.props.cart.map((item) => (
            <div className="sep" key={item.id}>{item.name}</div>
          ))}
        </div>
    )
  }
}

export default Cart
