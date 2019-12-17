import React from "react";
import "./App.css";
import Characters from "./components/Characters";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Films from "./components/Films";
import Favorites from './components/Favorites'

function App() {




  return (
    <BrowserRouter>
      <Header />
      <React.Fragment >
        <Route exact path="/" component={Films} />
        <Route path="/characters" component={Characters} />
        <Route path="/SWfavorites" component={Favorites} />
      </React.Fragment>

    </BrowserRouter>
  );
}

export default App;
