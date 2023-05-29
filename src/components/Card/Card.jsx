import React from "react";
import styled from "./styles";
import { useLocation } from "wouter";
import { usePagesStore } from "../../stores/pagesStorage";

const Card = ({ _id, title, price, imgUrl, review }) => {
  const { isLoading, setLoading } = usePagesStore();
  console.log("isLoading :", isLoading);
  const [, setLocation] = useLocation();

  const parseReview = (review) => {
    const formatted = review.trim().replaceAll(" ", "-").toLowerCase();
    return formatted;
  };

  const handleClick = () => {
    setLoading();
    setLocation(`/product/${_id}`)
  };

  return (
    <styled.CardWrapper onClick={handleClick}>
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
