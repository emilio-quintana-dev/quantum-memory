import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

import {
  Button,
  Column,
  ResultsSection,
  Row,
  Subtitle,
  Title,
} from "./style";

import { Container } from "../../globalStyles";

interface Props {
  inputs: string[];
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  words: string[];
}

const Results = ({
  loggedIn,
  setLoggedIn,
}: Props) => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("Authorization");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const renderActionOptions = (): JSX.Element => {
    if (loggedIn) {
      // renderScoresHere inside Column
      return(
        <>
          <Subtitle>Previous Results</Subtitle>
        </>
      )
    }


    return <></>;
  }


  return (
    <>
      <ResultsSection>
        <Container>
          <Title>result to be added here</Title>

          {renderActionOptions()}

          <Link to="/">
            <Button>Play again</Button>
          </Link>
        </Container>
      </ResultsSection>
    </>
  );
};

export default Results;
