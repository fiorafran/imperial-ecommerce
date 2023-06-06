import React, { useState } from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import styled from './styles';

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
