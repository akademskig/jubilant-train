import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from "react-router-dom";
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import { auth } from './firebase/firebase.utils';



class App extends React.Component {

  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
    })
  }
  render() {
    return (
      <div className="app">
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInUp} />
        </Switch>
      </div>
    );
  }

}

export default App;
