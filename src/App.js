import React from "react";

import "./App.css";
import Characters from "./components/Characters";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Films from "./components/Films";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Characters} />
          <Route path="/films" component={Films} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
