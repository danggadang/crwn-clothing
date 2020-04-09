import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.action';

class App extends React.Component {
   unsubscribeFromAuth = null;
   componentDidMount() {
      const { checkUserSession } = this.props;
      checkUserSession();
   }
   componentWillUnmount() {
      this.unsubscribeFromAuth();
   }
   render() {
      return (
         <div>
            <Header />
            <Switch>
               <Route exact path="/" component={HomePage} />
               <Route path="/shop" component={ShopPage} />
               <Route exact path="/check-out" component={CheckoutPage} />
               <Route exact path="/sign-in" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)} />
            </Switch>
         </div>
      );
   }
}

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
})
const mapDispatchToProps = (dispatch) => ({
   checkUserSession: () => dispatch(checkUserSession())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
