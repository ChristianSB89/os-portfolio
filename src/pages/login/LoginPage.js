import React from "react";

import {
  LogInBody,
  LogInBtn,
  LogInImg,
  Name,
  TextWrapper,
  Work,
} from "./loginPageStyle";
import SideShot from "../../image/side-shot.png";

function LoginPage() {
  return (
    <LogInBody>
      <LogInImg src={SideShot} />
      <TextWrapper>
        <Name>Christian Sandum Breivik</Name>
        <Work>Frontend | Grafisk | Illustrasjon</Work>
      </TextWrapper>
      <LogInBtn>Velkommen</LogInBtn>
    </LogInBody>
  );
}

export default LoginPage;
