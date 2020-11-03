import React, { useState, useEffect } from "react";
import { Title, CardWrapper, CardItem } from "./style";
import { Container } from "../../globalStyles";
import { useHistory } from "react-router-dom";

const WordBank = (props) => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isActive, setActive] = useState(true);
  const history = useHistory();

  const toggle = () => {
    setActive(!isActive);
  };

  const renderWords = () => {
    return props.words.map((word, index) => {
      return <CardItem key={index}>{word}</CardItem>;
    });
  };

  useEffect(() => {
    let interval = null;

    if (isActive) {
      if (timeLeft === 0) return history.push("/quiz");
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
    } else if (!isActive && timeLeft !== 60) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  return (
    <>
      <Container>
        <Title
          style={{ color: "white", textAlign: "center" }}
        >{`You have ${timeLeft} seconds left`}</Title>
        <CardWrapper>{renderWords()}</CardWrapper>
      </Container>
    </>
  );
};

export default WordBank;
