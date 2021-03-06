import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from './pages/Servicies';
import SignUp from './pages/SignUp';
import Products from './pages/Products';

import './App.css'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path="/services" component={Services}/>
          <Route path="/sign-up" component={SignUp}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
