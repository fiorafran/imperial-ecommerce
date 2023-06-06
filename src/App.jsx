import React, { useState } from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import PageHeader from './components/PageHeader';
import Title from './components/Title';

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
      <Content />
      <Footer />
    </styled.App>
  );
};

export default App;
