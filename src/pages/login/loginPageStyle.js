import styled from "styled-components";

export const LogInBody = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    45deg,
    rgba(67, 109, 153, 1) 0%,
    rgba(106, 244, 247, 1) 100%
  );
  height: 100vh;
`;

export const LogInImg = styled.img`
  width: 15em;
  height: 15em;
  object-fit: cover;
  object-position: top;
  background: lightblue;
  border-radius: 10em;
  border: gray inset 2px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.h1`
  color: #436e9a;
  margin: 0;
  margin-top: 1em;
`;

export const Work = styled.h3`
  color: #2d5769;
  margin: 0;
`;

export const LogInBtn = styled.button`
  border: #436f9a outset 2px;
  font-family: "Ubuntu", sans-serif;
  padding: 0.5em 1em;
  margin-top: 2em;
  border-radius: 1em;
  background: #69f3f6;
  text-transform: uppercase;
  font-weight: 500;
  pointer-events: auto;
  &:hover {
    background: #b1fbfc;
  }
`;
