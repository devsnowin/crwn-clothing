import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.component';
import Authentication from './pages/authentication/authentication.component';
import {auth} from './firebase/firebase.utils'


class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
    
  }

  unsubcribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
      
    })
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }
  
  render() {

    return (
      <div>
        <Header currentUser={ this.state.currentUser }/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={Authentication} />
        </Switch>
      </div>
    );
    
  }
}

export default App;
