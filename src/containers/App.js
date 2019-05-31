import React, { Component} from 'react';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import States from '../data/states';

class App extends Component {
  
  state = {
    states: States,
    searchedResult: []
  }

  searchStateHandler = event => {
    const inputValue = event.target.value.toUpperCase();
    const states = [...this.state.states];
    const searchedResult = [];
    for(let state of states) {
      if(state.name.toUpperCase().includes(inputValue)) searchedResult.push(state);
    }
    this.setState({
      searchedResult: searchedResult
    });
  }

  render() {
    return (
      <div className="App">
        <Cockpit states={this.state.states}
        searchedResult={this.state.searchedResult}
        searchState={this.searchStateHandler} />
      </div>
    );
  }
}

export default App;
