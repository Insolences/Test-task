import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "../Home";
import { Orders } from "../Orders";
import { Products } from "../Products";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/products" exact component={Products} />
        </Switch>
      </Router>
    );
  }
}
