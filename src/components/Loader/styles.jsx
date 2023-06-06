import styled from "styled-components";

const Loader = styled.div`
  width: 70px;
  height: 70px;
  background: radial-gradient(farthest-side, #f400f0 90%, #0000) center/16px
      16px,
    radial-gradient(farthest-side, #ff0000 90%, #0000) bottom/12px 12px;
  background-repeat: no-repeat;
  animation: s7 1s infinite linear;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    inset: auto 0 16px;
    margin: auto;
    background: #05ff1a;
    border-radius: 50%;
    transform-origin: 50% calc(100% + 10px);
    animation: inherit;
    animation-duration: 0.5s;
  }

  @keyframes s7 {
    100% {
      transform: rotate(1turn);
    }
  }
`;

export default { Loader };
