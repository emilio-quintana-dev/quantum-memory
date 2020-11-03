import React, { useState } from "react";
import { Title, Form, Input } from "./style";
import { Button } from "../../globalStyles";
import { useHistory } from "react-router-dom";
import { Container } from "../../globalStyles";

interface Props {
  setInputs: React.Dispatch<React.SetStateAction<>>;
}

const Quiz = ({ setInputs }: Props) => {
  const history = useHistory();
  const [values, setValues] = useState([]);

  const handleChange = (e) => {
    values[e.target.name] = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setInputs(values);
    history.push("/results");
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Title>Let's see how much you remember</Title>
          <Input
            type="text"
            name={0}
            placeholder="Word"
            onChange={handleChange}
          />
          <Input
            type="text"
            name={1}
            placeholder="Word"
            onChange={handleChange}
          />
          <Input
            type="text"
            name={2}
            placeholder="Word"
            onChange={handleChange}
          />
          <Input
            type="text"
            name={3}
            placeholder="Word"
            onChange={handleChange}
          />
          <Input
            type="text"
            name={4}
            placeholder="Word"
            onChange={handleChange}
          />
          <Input
            type="text"
            name={5}
            placeholder="Word"
            onChange={handleChange}
          />
          <Input
            type="text"
            name={6}
            placeholder="Word"
            onChange={handleChange}
          />
          <Input
            type="text"
            name={7}
            placeholder="Word"
            onChange={handleChange}
          />
          <Input
            type="text"
            name={8}
            placeholder="Word"
            onChange={handleChange}
          />
          <Input
            type="text"
            name={9}
            placeholder="Word"
            onChange={handleChange}
          />
          <Button primary>Submit</Button>
        </Form>
      </Container>
    </>
  );
};

export default Quiz;
