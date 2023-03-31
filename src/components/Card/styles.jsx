import styled from "styled-components";
import { colors } from "../../utils/palette";

const reviewColor = {
  "mayormente-positivas": "#EBFF06",
  "extremadamente-positivas": "#00FF47",
  "muy-positivas": "#27A13B",
  "muy-negativas": "#FD1927",
  negativas: "#FE6E06",
  positivas: "#F5CA2F",
  variadas: "#35F7FF",
};

const CardWrapper = styled.a`
  text-decoration: none;
  color: ${colors.whiteAlpha60};
  border-radius: 10px;
  max-width: 300px;
  overflow: hidden;
  background-color: rgb(75, 83, 83, 0.22);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.1);
  transition: all 0.2s ease-in-out;
  :hover {
    box-shadow: 0px 0px 13px 5px rgba(14, 131, 136,0.2);
    color: ${colors.white}
  }
`;

const GameImg = styled.img`
  width: 100%;
`;

const GameTitle = styled.div`
  margin: 6px 0 15px 0;
`;

const CardFooter = styled.div`
  width: 95%;
  display: flex;
  justify-content: right;
  margin: auto;
  position: relative;
`;

const Review = styled.div`
  position: absolute;
  left: 0;
  height: 23px;
  font-size: 15px;
  display: flex;
  gap: 3px;
  & > span {
    max-width: 112px;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 100%;
    color: ${({ review }) => reviewColor[review] || colors.whiteAlpha60};
  }
`;

const Price = styled.div`
  font-weight: bold;
  color: #15abb1;
`;

export default { CardWrapper, GameImg, GameTitle, CardFooter, Review, Price };
