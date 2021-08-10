import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
    <p>Welcome to hats page!</p>
  </div>
)

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop/hats" component={HatsPage} />
    </div>
  );
}

export default App;
