import React from "react";
// import Routes from "./Routes";
// import { Routes, BrowswerRouter } from "./Routes";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import NavBar from "./components/nav";
import About from "./components/About";
import Shop from "./components/Shop";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Order from "./components/Order";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="container">
        <NavBar />
        <Switch>
          <Route exact path="/shopping-cart" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/cart" component={Cart} />
          <Route path="/about" component={About} />
          <Route path="/order" component={Order} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
