import React from "react";
import styled from "styled-components";
import imgSeta from "../assets/img/seta_play.png";
import imgVira from "../assets/img/seta_virar.png";
import iconeCerto from "../assets/img/icone_certo.png";
import iconeErro from "../assets/img/icone_erro.png";
import iconeQuase from "../assets/img/icone_quase.png";

export default () => {
  return (
    <>
      <QuestionClosed>
        <p>pergunta 1</p>
        <img src={imgSeta} />
        <img src={imgVira} />
        <img src={iconeCerto} />
        <img src={iconeErro} />
        <img src={iconeQuase} />
      </QuestionClosed>
      <QuestionOpn>
        <p>pergunta 1</p>
        <img src={imgVira} />
        <Options />
      </QuestionOpn>
    </>
  );
};

function Options() {
  return (
    <>
      <div>Não lembrei</div>
      <div>Quase não lembrei</div>
      <div>ZAP!</div>
    </>
  );
}

const QuestionClosed = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`;
const QuestionOpn = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;
