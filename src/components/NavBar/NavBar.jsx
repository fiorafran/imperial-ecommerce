import React from "react";
import styled from "./styles";
import { RiShoppingCartLine } from "react-icons/ri";

const NavBar = () => {
  return (
    <styled.NavBar>
      <styled.Logo><img src="" alt="NavBar"></img></styled.Logo>
      <styled.Search placeholder="Search"/> 
      <RiShoppingCartLine size={40}/>
    </styled.NavBar>
  );
};

export default NavBar;
