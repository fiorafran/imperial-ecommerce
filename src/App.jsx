import React, { useState } from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import styled from "./styles";
import { Route, Router, Switch } from "wouter";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Product";

const App = () => {
  return (
    <styled.App>
      <NavBar />
      <Router>
        <Route path="/login" component={Login} />
        <Route path="/" component={Content} />
        <Route path="/product/:id" component={Product} />
        {/* <Route>404, Not Found!</Route> */}
      </Router>
      <Footer />
    </styled.App>
  );
};

export default App;
