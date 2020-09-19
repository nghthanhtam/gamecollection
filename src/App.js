import React from "react";
import "./App.css";
import { Route, Router } from "react-router-dom";
import GamesPage from "./GamesPage";
import GameFormPage from "./GameFormPage";
import test from "./test";
import testMenu from "./TestMenu";
import Home from "./Home/Home";
import ProductList from "./Home/Product/ProductList";
import ProductDetail from "./Home/Product/ProductDetail";
import Cart from "./Home/Checkout/Cart";
import Payment from "./Home/Checkout/Payment";
import OrderReceipt from "./Home/Checkout/OrderReceipt";
import Account from "./Home/User/Account";
import LaterList from "./Home/User/LaterList";
import history from "./Home/history";

function App() {
  return (
    // <div className="ui container">
    //   <div className="ui three item menu">
    //     <Link className="item" to="/">
    //       Home{" "}
    //     </Link>
    //     <Link className="item" to="/games">
    //       Games{" "}
    //     </Link>
    //     <Link className="item" to="/games/add">
    //       Add new game{" "}
    //     </Link>
    //   </div>
    //   <Route exact path="/games" component={GamesPage} />
    //   <Route exact path="/test" component={test} />
    //   <Route path="/games/add" component={GameFormPage} />
    //   <Route path="/game/:_id" component={GameFormPage} />
    // </div>
    <Router history={history}>
      <Route exact path="/games" component={GamesPage} />
      <Route path="/games/add" component={GameFormPage} />
      <Route path="/game/:_id" component={GameFormPage} />

      <Route exact path="/test" component={test} />
      <Route exact path="/menu" component={testMenu} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/product-list" component={ProductList} />
      <Route exact path="/product-detail" component={ProductDetail} />
      <Route exact path="/checkout/cart" component={Cart} />
      <Route exact path="/checkout/payment" component={Payment} />
      <Route exact path="/checkout/order-received" component={OrderReceipt} />
      <Route exact path="/user/account" component={Account} />
      <Route exact path="/user/later-list" component={LaterList} />
    </Router>
  );
}

export default App;
