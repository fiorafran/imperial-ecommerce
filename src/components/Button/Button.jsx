import React from "react";
import styled from "./styles";
import { RiShoppingCartLine } from "react-icons/ri";
import { MdOutlineContactSupport } from "react-icons/md";
import { HiOutlineLightBulb, HiLightBulb, HiOutlineUserCircle } from "react-icons/hi";

const Button = ({ icon = "", width, children, fontWeight, ...props }) => {
  const renderIcon = (name) => {
    const selectIcon = {
      cart: <RiShoppingCartLine size={25} />,
      darkMode: <HiLightBulb size={25} />,
      lightMode: <HiOutlineLightBulb size={25} />,
      support: <MdOutlineContactSupport size={25} />,
      user: <HiOutlineUserCircle size={25} />
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
