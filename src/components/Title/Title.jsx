import React from 'react';
import styled from './styled';

/* Este componente es reusable y es para generar Titutlos y en caso de ser usado mas de una vez se puede elegir el nivel del tag h */
const Title = ({
  text,
  level = 1,
  align,
  fontFamily,
  fontWeight,
  fontSize,
  color,
}) => {
  const headingTagLvl = `h${level}`;

  return (
    <styled.Title
      as={headingTagLvl}
      align={align}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      fontSize={fontSize}
      color={color}
    >
      {text}
    </styled.Title>
  );
};

export default Title;
