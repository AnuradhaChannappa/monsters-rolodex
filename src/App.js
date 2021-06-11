import React, {Component} from 'react';
import {  CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  constructor(){
    super();

    this.state =  {
        monsters: [],
        searchField: ''
    };
   // this.handleChange = this.handleChange.bind(this);
  }
 /*  handleChange(e) {
   this.setState( { searchField : e.target.value });
  } */
  handleChange = (e) => {
    this.setState( { searchField : e.target.value });
   }
  render(){

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )

    return (
      <div className="App">
        <div>
          <h1>monsters Rolodex</h1>
         <SearchBox
          placeholder = 'search monsters'
          handleChange = { this.handleChange }
         ></SearchBox>
         </div>
        <CardList monsters = {filteredMonsters}>     
        </CardList>
      </div>
    )
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState( {monsters: users } ))
  }
}

export default App;
