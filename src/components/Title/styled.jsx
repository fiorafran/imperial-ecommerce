import styled from 'styled-components';

const Title = styled.h1`
  text-align: ${(props) => {
    if (props.align === 'center') return 'center';
    if (props.align === 'right') return 'right';
    return 'left';
  }};
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
`;

export default { Title };
