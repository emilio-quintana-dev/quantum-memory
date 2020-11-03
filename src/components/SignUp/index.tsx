import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import {
  Button,
  Container,
  ErrorMsg,
  Form,
  FormLink,
  Input,
  InputWrapper,
  Label,
  Span,
  Title,
} from "./style";

interface Props {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
}

const SignUp = ({
}: Props) => {
  const history = useHistory();
  const [values, setValues] = useState({
    name: "John Smith",
    username: "john2000",
    email: "john@gmail.com",
    password: "password",
    password_confirmation: "password",
  });

  const [errors, setErrors] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users", values)
      .then((response) => {
        console.log("here");
        history.push("/");
      })
      .catch(function (error) {
        if (error.response) {
          setErrors(error.response.data.errors[0]);
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Sign Up</Title>
        <InputWrapper>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            onChange={handleChange}
            ref={inputRef}
            value={values.name}
          />

          <Label>Email</Label>
          <Input
            type="text"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
          <Label>Username</Label>
          <Input
            type="text"
            name="username"
            onChange={handleChange}
            value={values.username}
          />
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
          />
          <Label>Password Confirmation</Label>
          <Input
            type="password"
            name="password_confirmation"
            onChange={handleChange}
            value={values.password_confirmation}
          />
        </InputWrapper>
        {errors !== "" ? <ErrorMsg>{errors}</ErrorMsg> : null}
        <Button>Sign up</Button>
        <Span>
          Or <FormLink to="/login">log in</FormLink>
        </Span>
      </Form>
    </Container>
  );
};

export default SignUp;
