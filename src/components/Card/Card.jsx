import React from "react";
import styled from "./styles";

const Card = ({ _id, title, price, imgUrl, review }) => {
  const parseReview = (review) => {
    const formatted = review.trim().replaceAll(" ", "-").toLowerCase();
    return formatted;
  };

  return (
    <styled.CardWrapper href="/">
      <styled.GameImg src={imgUrl} />
      <styled.GameTitle>{title}</styled.GameTitle>
      <styled.CardFooter>
        <styled.Review review={parseReview(review)}>
          Reseñas: <span title={review}>{review}</span>
        </styled.Review>
        <styled.Price>{price}</styled.Price>
      </styled.CardFooter>
    </styled.CardWrapper>
  );
};

export default Card;
