import React from "react";

import {
  Container,
  Subtitle,
  Text,
  Title,
} from "./style";

const About = () => {
  return (
    <Container>
      <Title>How to play</Title>

      <Subtitle>The Project</Subtitle>
      <Text>
        Quantum Memory is a simple game made to improve the user's memory.
      </Text>

      <Subtitle>Instructions</Subtitle>
      <Text>
        The game is simple, the user is shown a list of 10 random words and is
        given 60 seconds to try to memorize the words. After 60 seconds, the
        words disappear and the user is presented with the opportunity to
        write what he/she rememebrs. After the Quiz is completed, the result
        will be calculated and shown to the user.
      </Text>

      <Text>
        The web-app includes but does not requires user authentication. A user
        can play without an account but will have to create an account and log
        in if he/she wishes to save the results.
      </Text>
    </Container>
  );
};

export default React.memo(About);
