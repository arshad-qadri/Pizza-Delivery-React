import React from "react";
import {Redirect, Route, Switch} from "react-router-dom"
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Shop from "./components/Shop";
import Menu from "./components/Menu";
import Clients from "./components/Clients";
import Prices from "./components/Prices";

function App() {
  return (
    <div>
      {/* <Header />
      <About />
      <Shop />
      <Menu />
      <Clients /> */}
      {/* <Prices /> */}
      <Switch>
     <Route exact path="/" component={Header} />
       {/* <Route  path="/contact" component={Contact} /> */}
       {/* <Route  path="/about" component={About} /> */}
       <Route  path="/shop" component={Shop} />
       <Redirect to="/"/>
     </Switch>
      
      
    </div>
  );
}

export default App;
