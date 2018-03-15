import React, { Component } from 'react';
import Titles from './components/Title';
import Recipes from './components/Recipes'; 
import RecipeCards from './components/Cards';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Titles/>
      <Recipes/>
      <RecipeCards/>
      </div>
    );
  }
}

export default App;
