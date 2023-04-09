import styled from "styled-components";
import { colors } from "./utils/palette";

const App = styled.div`
  background-color: ${colors.secondary};
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
` 

export default { App }