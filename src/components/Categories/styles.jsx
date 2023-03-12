import styled from "styled-components";
import { colors } from "../../utils/palette";

const CategoriesList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 3rem;
`;

const Category = styled.li`
display: flex;
justify-content: center;
align-items: center;
  cursor: pointer;
  margin: 0 20px;
  font-size: 16px;
  font-weight: 500;
  position: relative;
  color: rgba(255, 255, 255, 0.75);
  transition: color 0.3s ease-in-out;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0%;
    background-color: ${colors.white};
    transition: width 0.3s ease-in-out;
  }
  &:hover {
    color: ${colors.white};
    ::before {
      width: 100%;
    }
  }
`;

export default { CategoriesList, Category };
