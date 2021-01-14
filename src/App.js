import React from "react";
import {Redirect, Route, Switch} from "react-router-dom"
import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import Shop from "./components/Shop";
import VegPizza from "./pages/VegPizza";
import NonVegPizza from "./pages/NonVegPizza";
import Beverages from "./pages/Beverages";
import Desserts from "./pages/Desserts";
// import Menu from "./components/Menu";
// import Clients from "./components/Clients";
// import Prices from "./components/Prices";

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
       <Route  path="/about" component={About} />
       <Route  path="/shop" component={Shop} />
       <Route  path="/vegpizza" component={VegPizza} />
       <Route  path="/nonvegpizza" component={NonVegPizza} />
       <Route  path="/beverages" component={Beverages} />
       <Route  path="/desserts" component={Desserts} />
       
       <Redirect to="/"/>
     </Switch>
      
      
    </div>
  );
}

export default App;
