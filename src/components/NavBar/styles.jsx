import styled from "styled-components";
import { colors } from "../../utils/palette";

const NavBar = styled.div`
  color: ${colors.white};
  background-color: ${colors.primary};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 1360px;
  margin: auto;
  position: relative;
`;

const Logo = styled.div`
  display: flex;
  max-width: 155px;
  flex-wrap: wrap;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  text-align: center;
  line-height: 85.69%;
  letter-spacing: 0.1em;
  color: ${colors.white};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ContainerButtons = styled.div`
  display: flex;
  margin-left: 3rem;
`;

const userWrapper = styled.div`
  width: 50px;
  margin-left: 20px;
`

const userImage = styled.img`
  width: 50px;
  border-radius: 15px;
  cursor: pointer;
  transition: border-radius 0.2s ease-in-out;
  &:hover {
    border-radius: 5px;
  }
`

export default { NavBar, Wrapper, Logo, ContainerButtons, userWrapper, userImage };
