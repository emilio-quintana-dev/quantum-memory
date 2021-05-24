import React, {
  useState,
  useEffect,
  useRef
} from "react";
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
    // Disabling until I get typescript working here
    // inputRef.current.focus();
  }, []);

  const handleSignUp = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/users", values)
      .then((response) => {
        if (response) {
          history.push("/");
        }
      })
      .catch(function (error) {
        if (error.response) {
          setErrors(error.response.data.errors[0]);
        }
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const {
    name,
    email,
    username,
    password,
    password_confirmation
  } = values;

  return (
    <Container>
      <Form onSubmit={handleSignUp}>
        <Title>Sign Up</Title>

        <InputWrapper>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            onChange={handleInputChange}
            ref={inputRef}
            value={name}
          />

          <Label>Email</Label>
          <Input
            type="text"
            name="email"
            onChange={handleInputChange}
            value={email}
          />

          <Label>Username</Label>
          <Input
            type="text"
            name="username"
            onChange={handleInputChange}
            value={username}
          />

          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            onChange={handleInputChange}
            value={password}
          />

          <Label>Password Confirmation</Label>
          <Input
            type="password"
            name="password_confirmation"
            onChange={handleInputChange}
            value={password_confirmation}
          />

        </InputWrapper>

        {
          errors && (
            <ErrorMsg>
              {errors}
            </ErrorMsg>
          )
        }

        <Button>Sign up</Button>
        <Span>
          Or <FormLink to="/login">log in</FormLink>
        </Span>
      </Form>
    </Container>
  );
};

export default SignUp;
