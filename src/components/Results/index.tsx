import React, { useState, useEffect } from "react";
import { Title, Subtitle, ResultsSection, Column, Row, Button } from "./style";
import { Container } from "../../globalStyles";
import axios from "axios";
import { Link } from "react-router-dom";

const Results = (props) => {
  const [result, setResult] = useState(0);
  const [isActive, setActive] = useState(true);
  const [scores, setScores] = useState([]);

  const computedResult = computeResult();

  useEffect(() => {
    const token = localStorage.getItem("Authorization");
    if (token) {
      props.setLoggedIn(true);
      fetchScores(token);
      submitScore();
    }
  }, []);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      if (result === computedResult) {
        setActive(false);
        clearInterval();
        return;
      }
      interval = setInterval(() => {
        setResult((result) => result + 1);
      }, 50);
    } else if (!isActive && result !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, result]);

  function computeResult() {
    let lcWords = null;
    let lcInputs = [];

    if (props.words && props.inputs) {
      lcWords = props.words.map((word) => word.toLowerCase());
      for (let i = 0; i < 10; i++) {
        if (props.inputs[i]) {
          lcInputs.push(props.inputs[i].toLowerCase());
        } else {
          lcInputs.push("empty");
        }
      }
    }

    // let results = lcInputs
    //   .map((input, index) => (input === lcWords[index] ? 1 : 0))
    //   .reduce((a, b) => a + b, 0);

    let results = lcInputs
      .map((input, index) => (lcWords.includes(input) ? 1 : 0))
      .reduce((a, b) => a + b, 0);

    results = (results / 10) * 100;
    return results;
  }

  const handleClick = () => {
    setActive(!isActive);
  };

  const submitScore = async () => {
    axios
      .post(
        "http://localhost:3000/scores",
        { score: computedResult },
        {
          headers: {
            Authorization: localStorage.getItem("Authorization"),
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  async function fetchScores(token) {
    const scoresObjects = await axios.get("http://localhost:3000/scores", {
      headers: {
        Authorization: token,
      },
    });

    setScores(scoresObjects.data);
  }

  const renderScores = () => {
    return scores.map((score, index) => {
      return <Row key={index}>{score.score}</Row>;
    });
  };

  return (
    <>
      <ResultsSection>
        <Container>
          <Title>{result}%</Title>
          {props.loggedIn ? (
            <>
              <Subtitle>Previous Results</Subtitle>
              <Column>{renderScores()}</Column>
            </>
          ) : null}
          <Link to="/">
            <Button>Play again</Button>
          </Link>
        </Container>
      </ResultsSection>
    </>
  );
};

export default Results;
