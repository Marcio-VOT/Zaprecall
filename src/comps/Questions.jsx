import React from "react";
import styled from "styled-components";
import imgSeta from "../assets/img/seta_play.png";
import imgVira from "../assets/img/seta_virar.png";
import iconeCerto from "../assets/img/icone_certo.png";
import iconeErro from "../assets/img/icone_erro.png";
import iconeQuase from "../assets/img/icone_quase.png";

export default (props) => {
  let [select, setSelect] = React.useState(false);
  let auxSelect = select;
  let [select1, setSelect1] = React.useState(true);
  let auxSelect1 = select1;
  let [holdOption, setHoldOption] = React.useState(0);
  let [color, setColor] = React.useState("");
  function next() {
    auxSelect = !auxSelect;
    setSelect(auxSelect);
  }
  function next1() {
    auxSelect1 = !auxSelect1;
    setSelect1(auxSelect1);
  }
  return (
    <>
      <QuestionClosed display={auxSelect ? "none" : "flex"} color={color}>
        <FrstOption
          holdOption={holdOption}
          next={next}
          index={props.index}
          setColor={setColor}
        />
      </QuestionClosed>

      <QuestionOpn display={auxSelect && auxSelect1 ? "flex" : "none"}>
        <p>{props.card.question}</p>
        <img src={imgVira} onClick={() => next1()} />
      </QuestionOpn>

      <QuestionOpn display={auxSelect1 ? "none" : "flex"}>
        <p>{props.card.answer}</p>
        <Options
          setSelect1={setSelect1}
          setSelect={setSelect}
          setHoldOption={setHoldOption}
          answer={props.answer}
          setAnswer={props.setAnswer}
        />
      </QuestionOpn>
    </>
  );
};
function FrstOption(props) {
  switch (props.holdOption) {
    case 0:
      props.setColor("#333333");
      return (
        <>
          <p>pergunta {props.index + 1}</p>
          <img src={imgSeta} onClick={() => props.next()} />
        </>
      );
      break;
    case 1:
      props.setColor("#FF3030");
      return (
        <>
          <p>pergunta {props.index + 1}</p>
          <img src={iconeErro} />
        </>
      );
      break;
    case 2:
      props.setColor("#FF922E");
      return (
        <>
          <p>pergunta {props.index + 1}</p>
          <img src={iconeQuase} />
        </>
      );
      break;
    case 3:
      props.setColor("#2FBE34");
      return (
        <>
          <p>pergunta {props.index + 1}</p>
          <img src={iconeCerto} />
        </>
      );
      break;
  }
}

function Options(props) {
  function getOption(num) {
    props.setSelect1(true);
    props.setSelect(false);
    props.setHoldOption(num);
    props.setAnswer(props.answer + 1);
  }

  return (
    <ContainerButton>
      <Button color={"#FF3030"} onClick={() => getOption(1)}>
        Não lembrei
      </Button>
      <Button color={"#FF922E"} onClick={() => getOption(2)}>
        Quase não lembrei
      </Button>
      <Button color={"#2FBE34"} onClick={() => getOption(3)}>
        ZAP!
      </Button>
    </ContainerButton>
  );
}
const ContainerButton = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  width: 90px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: ${(props) => props.color};
  border-radius: 5px;
  border: 1px solid ${(props) => props.color};
  padding: 5px;
`;
const QuestionClosed = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: ${(props) => props.display};
  align-items: center;
  justify-content: space-between;
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.color};
    text-decoration: ${(props) =>
      props.color == "#333333" ? "" : "line-through"};
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
  display: ${(props) => props.display};
  flex-direction: column;
  justify-content: space-between;
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;
