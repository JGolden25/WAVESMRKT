import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';

class App extends Component() {

  componentDidMount(){
    axios.get('/api/product/brands').then(response=>{
      console.log(response)
    })
  }
  render() {
  return (
    <div className="App">
      MY APP
    </div>
  );
}
}

export default App;
