import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/ProductList';

function App() {
  return (
    <Router>
      {/*All our Routes goes here!*/}
      <Route exact path='/' component={Home} />
      <Route exact path='/products' component={ProductList} />
    </Router>
  );
}

export default App;
