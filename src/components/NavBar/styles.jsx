import styled from "styled-components";
import { colors } from "../../utils/palette";

const NavBar = styled.div`
  width: 100%;
  background-color: ${colors.primary};
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  padding: 5px;
`;
const Search = styled.input`
  width: 300px;
  height: 30px;
  background-color: #fff;
  border: 0;
  border-radius: 20px;
  padding: 5px 15px;
  outline: none;
  color: ${colors.secondary};
`;


export default { NavBar, Logo, Search };
