import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Title, CardWrapper, CardItem } from "./style";

import { Container } from "../../globalStyles";

interface Props {
  words: string[];
}

const WordBank = ({ words }: Props) => {

  const renderWords = () => {
    return words.map((word, index) => {
      return (
        <CardItem key={index}>
          {word}
        </CardItem>
      );
    });
  };

  return (
    <>
      <Container>
        <Title
          style={{ color: "white", textAlign: "center" }}
        >
        {`You have timeLeftGoesHere seconds left`}
        </Title>

        <CardWrapper>
          {renderWords()}
        </CardWrapper>
      </Container>
    </>
  );
};

export default WordBank;
