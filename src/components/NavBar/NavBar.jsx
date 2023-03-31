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
          <Button icon="support" />
          <Button icon="cart" />
        </styled.ContainerButtons>
        <styled.userImage src="https://i.seadn.io/gae/b91FFh2EPsExNTHHqECbEQsqDSgaBeOxYWIZfNeYdXfmBOIFPpbyB2VphB_6m_g5iu_ACtgA11X-64TsqWUtdv5x9fFzco4N7OzFYio?auto=format&w=1000"/>
      </styled.Wrapper>
    </styled.NavBar>
  );
};

export default NavBar;
