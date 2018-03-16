import React, { Component } from 'react';
import './App.css';
import Titles from './components/Title';
import RecipePanel from './components/Cards';
import RecipeDetails from './Recipe.json';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Titles/>
      <RecipePanel recipes={RecipeDetails.recipes}/>
      </div>
    );
  }
}

export default App;
