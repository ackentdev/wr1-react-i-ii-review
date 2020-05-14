import React, {Component} from 'react';
import Citizen from './components/Citizen';
import Form from './components/Form';
import data from './data';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      citizens: [],
      firstName: '',
      lastName: '',
      email: '',
      school: '',
      id: 6
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.addCitizen = this.addCitizen.bind(this);
  }

  componentDidMount(){
    this.setState({
      citizens: data
    })
  }

  changeHandler(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addCitizen(e){
    e.preventDefault();
    const {firstName, lastName, email, school, id} = this.state
    const newCitizen = {
      id,
      firstName,
      lastName,
      email,
      school
    }
    
    this.setState({
      citizens: [...this.state.citizens, newCitizen],
      firstName: '',
      lastName: '',
      email: '',
      school: '',
      id: this.state.id + 1
    })
  }

  render(){
    console.log(this.state)
    const {firstName, lastName, school, email} = this.state;
    const citizens = this.state.citizens.map(elem => {
      console.log('passing props: ', elem)
      return <div>
        <Citizen greeting='Welcome to Bikini Bottom, ' person={elem}/>
      </div>
    })
    return (
      <div className="App">
        <Form 
          changeHandler={this.changeHandler} 
          addCitizen={this.addCitizen}
          firstName={firstName}
          lastName={lastName}
          school={school}
          email={email}/>
         {citizens}
         {/* <Citizen greeting="Hello, " person={this.state.citizens[0]}/> */}
      </div>
    );
  }
}

export default App;
