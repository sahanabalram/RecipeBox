import React, { Component } from 'react';
import Titles from './components/Title';
import Recipes from './components/Recipes'; 
import RecipeCards from './components/Cards';
import RecipeDetails from './Recipe.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Titles/>
    {/*<Recipes/>*/}
      <RecipeCards recipes={RecipeDetails.recipes}/>
      </div>
    );
  }
}

export default App;
