import React from "react";
import styled from "./styles";
import { RiShoppingCartLine, RiSunFill, RiSunLine } from "react-icons/ri";

const Button = ({ icon = "", width, children, fontWeight, ...props }) => {
  const renderIcon = (name) => {
    const selectIcon = {
      cart: <RiShoppingCartLine size={25} />,
      darkMode: <RiSunFill size={25} />,
      lightMode: <RiSunLine size={25} />,
    };

    return selectIcon[name] || <></>;
  };

  return (
    <styled.Wrapper>
      <styled.Button children={children} fontWeight={fontWeight} {...props}>
        {renderIcon(icon)}
        {children}
      </styled.Button>
    </styled.Wrapper>
  );
};

export default Button;
