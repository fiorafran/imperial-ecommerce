import styled from 'styled-components';
import { colors } from '../../utils/palette';

const ContainerHeader = styled.header`
  background-color: ${colors.secondary};
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 17rem;
  height: 30vh;
`;
export default { ContainerHeader };
