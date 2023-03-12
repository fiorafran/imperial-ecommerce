import React from "react";
import styled from "./styles";
import Categories from "../Categories";
import Button from "../Button";
import Search from "../Search";

const NavBar = () => {
  return (
    <styled.NavBar>
      <styled.Wrapper>
        <styled.Logo>Imperial Ecommerce</styled.Logo>
        <Categories categories={["Free to play", "FPS", "MOBA", "RTS"]} />
        <Search />
        <styled.ContainerButtons>
          <Button icon="lightMode" />
          <Button icon="cart" />
        </styled.ContainerButtons>
      </styled.Wrapper>
    </styled.NavBar>
  );
};

export default NavBar;
