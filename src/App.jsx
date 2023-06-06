import React, { useState } from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import styled from './styles';

const App = () => {
  return (
    <styled.App>
      <NavBar />
      <PageHeader
        titleComponent={
          <Title
            text="Título a la izquierda"
            level={2}
            textAlign="right"
            fontFamily={'Roboto'}
            fontWeight={500}
            fontSize={'30px'}
          />
        }
      />
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
