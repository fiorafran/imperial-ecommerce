import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  margin: 0 10px;
  cursor: pointer;
  min-width: 42px;
  min-height: 42px;
  border-radius: ${({ children }) => (children ? "20px" : "50%")};
  font-weight: ${({ fontWeight }) => fontWeight || "100"};
  border: none;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  background-color: transparent;
  padding: 0 6px;

  ::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.4s ease-in-out;
  }
  :hover::before {
    transform: scale(2);
  }
`;

export default { Wrapper, Button };
