import React from 'react';
import { Header } from 'semantic-ui-react';
import Product from './Components/Product';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header as="h1">團購 sample</Header>
      <Product />
    </div>
  );
}

export default App;
