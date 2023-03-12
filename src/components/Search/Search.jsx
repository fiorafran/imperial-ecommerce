import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { colors } from "../../utils/palette";
import styled from "./styles";

const Search = () => {
  return (
    <styled.Wrapper>
      <styled.IconWrapper>
        <RiSearchLine color="#535353a6" size={25}/>
      </styled.IconWrapper>
      <styled.Search placeholder="Search" />
    </styled.Wrapper>
  );
};

export default Search;
