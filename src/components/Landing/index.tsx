import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import LandingImage from "../../images/svg_1.svg";

import {
  Button,
  Column,
  Img,
  ImgWrapper,
  LandingSection,
  Row,
  Subtitle,
  TextWrapper,
  Title,
} from "./style";

import randomWords from "random-words";

import { Container } from "../../globalStyles";

interface Props {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setWords: React.Dispatch<React.SetStateAction<string[]>>;
}

const Landing = ({ setLoggedIn, setWords }: Props) => {

  useEffect(() => {
    const token = localStorage.getItem("Authorization");

    if (token) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <LandingSection>
      <Container>
        <Row>
          <Column>
            <TextWrapper>
              <Title>Looking to improve your memory?</Title>
              <Subtitle></Subtitle>
              <Link to="/bank">
                <Button
                  onClick={
                    () => setWords(randomWords(10))
                  }>
                  Get smarter
                </Button>
              </Link>
            </TextWrapper>
          </Column>

          <ImgWrapper>
            <Img src={LandingImage} />
          </ImgWrapper>
        </Row>
      </Container>
    </LandingSection>
  );
};

export default React.memo(Landing);
