import React, { useState } from "react";
import { Title, Form, Input } from "./style";
import { Button } from "../../globalStyles";
import { useHistory } from "react-router-dom";
import { Container } from "../../globalStyles";

interface Props {
  setInputs: React.Dispatch<React.SetStateAction<string[]>>;
}

const Quiz = ({ setInputs }: Props) => {
  const history = useHistory();
  const [answers, setAnswers] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLElement>) => {
    e.preventDefault();
    setInputs(answers);
    history.push("/results");
  };

  const renderInputFields = () => {
    const times = 10;
    let inputFields: JSX.Element[] = [];

    for(let i = 0; i < times; i++) {
      inputFields.push
      (
        <Input
          type="text"
          name={i}
          onChange={handleChange}
          placeholde="word"
        />
      );
    }

    return inputFields.join();
  }

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Title>Let's see how much you remember</Title>

          {renderInputFields()}

          <Button primary>Submit</Button>
        </Form>
      </Container>
    </>
  );
};

export default Quiz;
