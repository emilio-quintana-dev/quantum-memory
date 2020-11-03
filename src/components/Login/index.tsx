import React, {
  useState,
  useEffect,
  useRef,
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
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ setLoggedIn }: Props) => {
  const history = useHistory();
  const [values, setValues] = useState({
    email: "emilioquintana90@gmail.com",
    password: "password",
  });
  const [errors, setErrors] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    // Disabling until I get typescript working here
    // inputRef.current.focus();
  }, []);

  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    axios
    .post("http://localhost:3000/auth/login", values)
    .then((response) => {
      if (response.data) {
        const { authToken } = response.data;
        localStorage.setItem("Authorization", authToken);
        setLoggedIn(true);
        history.push("/");
      }
    })
    .catch((error) => {
      if (error.response) {
        setErrors("Invalid email or password");
      }
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value});
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Title>Login</Title>

        <InputWrapper>
          <Label>Email</Label>
          <Input
            type="text"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            ref={inputRef}
          />

          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={values.password}
            onChange={handleInputChange}
          />
        </InputWrapper>

        {
          errors && (
            <ErrorMsg>
              {errors}
            </ErrorMsg>
          )
        }

        <Button>Log in</Button>

        <Span>
          Don't have an account ?
          <FormLink to="/register">
            Sign up
          </FormLink>
        </Span>
      </Form>
    </Container>
  );
};

export default React.memo(Login);
