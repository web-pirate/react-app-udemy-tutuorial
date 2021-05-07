import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name: "Manish", age:20},
      {name: "Vishal", age:15},
      {name: "Renu", age:40}
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

  togglePersonHandler = () =>{
    const doesShow = this.state.isActive;
    this.setState({
      isActive: !doesShow
    });
  }


  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name :"Manish", age:30},
        {name : event.target.value , age:30},
        {name :"Renu SIngh", age:60}
      ]
    })
  }

  
  
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    // { new code from the youtube buddy 
    //   let content = null;
    //   if(this.state.showPersons){
    //     content : <h2>THis is working</h2>
    //   }
    // }
    
    return (
      <div className="App">
        <h1>Hi, I am in react App</h1>
        <p>This things is actually working.</p>
        {/* The below method ()=>this.switchNameHolder is inefficient use the this.switchNameHandler.bind(arrayName, "String") */}
        <button
        style={style} 
        onClick={this.togglePersonHandler}> Switch Name</button>
        {/* <div>{ content }</div> */}

        {
          this.state.isActive === true ?

            <div>
              <Person 
              name = {this.state.persons[0].name}
              age = {this.state.persons[0].age}/>
              <Person 
              name = {this.state.persons[1].name}
              age = {this.state.persons[1].age}/>
              <Person 
              name = {this.state.persons[2].name}
              age = {this.state.persons[2].age}/>
            </div> : console.log("Error") 
            
        }
        
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement("h1",null,"Does things work?"))
  }
}

export default App;
