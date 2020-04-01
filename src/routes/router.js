import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Beranda from "../component/Beranda";
import LoggindanRegister from "../component/LogindanRegister";
import Groupchatt from "../component/Groupchatt";
class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Beranda} />
        <Route exact path="/login" component={LoggindanRegister} />
        <Route exact path="/groupchatt" component={Groupchatt} />
      </Switch>
    );
  }
}

export default Routes;
