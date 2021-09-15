import React, { Component } from 'react';
import listContainer from './listContainer'
import addItemContainer from './addItemContainer'
import './App.css'

class App extends React.Component  {
  constructor(props){
    super(props);
    this.state= {
      groceries: [
        {
          item: apples,
          units: '3 lbs',
          quantity:'7',
          isPurchased:false,
        },
        {
          item:oranges,
          units:'2 lbs',
          quantity: '5',
          isPurchased: false,
        },
        {
          item:milk,
          units: '1 gallon',
          quantity: '3',
          isPurchased: false,
        },
      ],
    }
  }
  addItem = item => {
    const groceries = ths.state.groceries.slice();
    this.setState({
      groceries: groceries.concat([item]),
    });
  }
  render(){
    return(
      <div className= 'App'>
      <div className= 'App-title'>Grocery List</div>
      <listContainer groceries= {this.state.groceries}/>
      <addItemContainer additem={this.additem}/>
      </div>
    );
  
  }
}
export default App;