import React, { useState } from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import styled from "./styles";

const App = () => {
  return (
    <styled.App>
      <NavBar />
      <Content />
      <Footer />
    </styled.App>
  );
};

export default App;
