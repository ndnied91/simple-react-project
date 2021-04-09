import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      //includes checks if the string value passed inside includes is inside the monster
    );

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>

        <SearchBox
          placeholder = 'search'
          handleChange= {this.onSearchChange }
        />


        <CardList monsters={filteredMonsters} />
       {/*  //new filtered list gets passed ti the Cardlist */}


      </div>
    );
  }
}

export default App;
