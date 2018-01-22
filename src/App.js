import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Nitzan', age: 24},
      {name: 'Kirill', age: 24},
      {name: 'Alli', age: 25}
    ],
    otherState: 'Some other value',
    showPersons: false,
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Nitzan Frock';
    this.setState({
      persons: [
        {name: newName, age: 25},
        {name: 'ChickenCombo', age: 24},
        {name: 'ArcticFox', age: 25}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Nitzan', age: 25},
        {name: event.target.value, age: 24},
        {name: 'ArcticFox', age: 25}
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>This is a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={() => {this.togglePersonHandler}}>Switch Name</button>
        {
          this.state.showPersons ?
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}/>
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'TurboRooster!')}
                changed={this.nameChangedHandler} >My Hobbies: Coding</Person>
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}/>
            </div> : null
        }
      </div>
    );
  }
}

export default App;
