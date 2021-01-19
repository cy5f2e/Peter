import React from 'react';
import { Header } from 'semantic-ui-react';
import Bendon from './Components/Bendon';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header as="h1">團購 sample</Header>
      <Bendon />
    </div>
  );
}

export default App;
