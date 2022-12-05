import React from "react";
import styled from "styled-components";
import Questions from "./Questions";
import imgLogo from "../assets/img/logo.png";

export default (props) => {
  return (
    <ScreenContainer>
      <LogoContainer>
        <img src={imgLogo} />
        <h1>ZapRecall</h1>
      </LogoContainer>
      {props.cards.map((c, index) => (
        <Questions
          answer={props.answer}
          setAnswer={props.setAnswer}
          card={c}
          index={index}
          key={index}
        />
      ))}
    </ScreenContainer>
  );
};

const ScreenContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  img {
    width: 52px;
  }
  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
  }
`;
