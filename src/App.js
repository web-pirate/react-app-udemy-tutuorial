import React, { Component } from 'react';
import './App.css';
// import person from './Person/Person';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {id:"hjkl78", name: "Manish", age:20},
      {id:"yuiop852", name: "Vishal", age:15},
      {id:"oijh852", name: "Renu", age:40}
    ],
    isActive: false
  }
  switchNameHandler = (newName) => {
    // console.log("Was Clicked")
    // DON'T DO THIS this.state.persons[0].name = "Singh"
    this.setState({
      persons: [
        {name :"Manish", age:30},
        {name :newName, age:30},
        {name :"Renu SIngh", age:60}
      ]
    })
  }
  
  deletePersonHandler = (personIndex)=> {
    // const persons = this.state.persons.slice();
    // OR use the spread operater in the es6 javascript 
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  }
  togglePersonHandler = () =>{
    const doesShow = this.state.isActive;
    this.setState({
      isActive: !doesShow
    });
  }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person ={
      ...this.state.persons[personIndex]
    } 
    person.name = event.target.value;

    const persons =[...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({persons:persons});

  }

  
  
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    
    let persons = null;
    
    if(this.state.isActive){
      persons = (
        <div>
          {this.state.persons.map((persons, index)=>{
            return <Person 
            click = {() => this.deletePersonHandler(index)}
            name = {persons.name} 
            age = {persons.age}
            // Key must be some thing unique 
            key = {persons.id}
            changed = {(event) => this.nameChangedHandler(event, persons.id)}/> 
          })}
      </div>
      )
    }
    
    return (
      <div className="App">
        <h1>Hi, I am in react App</h1>
        <p>This things is actually working.</p>
        {/* The below method ()=>this.switchNameHolder is inefficient use the this.switchNameHandler.bind(arrayName, "String") */}
        <button
        style={style} 
        onClick={this.togglePersonHandler}> Switch Name</button>
        {persons}

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement("h1",null,"Does things work?"))
  }
}

export default App;
