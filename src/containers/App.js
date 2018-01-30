import React, { PureComponent } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxillary';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Contructor', props);
    this.state = {
      persons: [
        {id: 'sdds1ff2', name: 'Nitzan', age: 24},
        {id: 'sdfe2r3g', name: 'Kirill', age: 24},
        {id: 'sdergrf2', name: 'Alli', age: 25}
      ],
      otherState: 'Some other value',
      showPersons: false,
    }
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  // state = {
  //   persons: [
  //     {id: 'sdds1ff2', name: 'Nitzan', age: 24},
  //     {id: 'sdfe2r3g', name: 'Kirill', age: 24},
  //     {id: 'sdergrf2', name: 'Alli', age: 25}
  //   ],
  //   otherState: 'Some other value',
  //   showPersons: false,
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // alternative way of copying use plain JS
    // const person = Object.assign({}, this.state.persons[personIndex]);
    
    // update person.name with the user input value
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    console.log('[App.js] Inside render()');
    let persons = null;

    if (this.state.showPersons) {
      persons = 
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />;
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons} 
          clicked={this.togglePersonHandler} />
        {persons}
      </Aux>
    );
  }
}

// higher order component
export default withClass(App, classes.app);