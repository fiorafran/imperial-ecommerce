import styled from "styled-components";
import { colors } from "../../utils/palette";

const NavBar = styled.div`
  color: ${colors.white};
  background-color: ${colors.primary};
  height: 60px;
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
  margin-left: 12rem;
`;

export default { NavBar, Wrapper, Logo, ContainerButtons };
