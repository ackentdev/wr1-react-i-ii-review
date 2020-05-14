import React, {Component} from 'react';
import Citizen from './components/Citizen';
import data from './data'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      citizens: []
    }
  }

  componentDidMount(){
    this.setState({
      citizens: data
    })
  }

  render(){
    console.log(this.state)
    const citizens = this.state.citizens.map(elem => {
      return <div>
        <Citizen greeting='Welcome to Bikini Bottom, 'citizen={elem}/>
      </div>
    })
    return (
      <div className="App">
         {citizens}
      </div>
    );
  }
}

export default App;
