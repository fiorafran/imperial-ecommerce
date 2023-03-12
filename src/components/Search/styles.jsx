import styled from "styled-components";
import { colors } from "../../utils/palette";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 6rem;
`;
const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: 7px;
  ::after {
    content: "";
    width: 1px;
    height: 70%;
    background-color: #ccc;
    margin-left: 4px;

  }
`;

const Search = styled.input`
  width: 300px;
  height: 30px;
  background-color: ${colors.white};
  border: 0;
  border-radius: 20px;
  padding: 5px 10px 5px 45px;
  outline: none;
  color: ${colors.secondary};
`;

export default { Wrapper, IconWrapper, Search };
