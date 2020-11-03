import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 600px;
  min-height: 550px;
  margin: 50px auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  justify-content: center;
  align-items: center;
`;

export const InputWrapper = styled.div`
  text-align: left;
  margin-bottom: 0.5rem;
  width: 80%;
`;

export const Input = styled.input`
  display: block;
  color: white;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 50px;
  width: 100%;
  border: 2.5px solid gray;
  border-radius: 5px;
  margin-bottom: 5px;
  font-size: 1.2rem;

  &:focus {
    transition: all 0.2s ease-out;
    border: 3px solid;
    border-color: ${colors.primary};
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Label = styled.label`
  display: inline-block;
  font-size: 1.2rem;
  margin-bottom: 6px;
  color: white;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 80%;
  height: 50px;
  border-radius: 2px;
  background: ${colors.primary};
  outline: none;
  border: none;
  border-radius: 5px;
  color: #fff;

  font-size: 1.2rem;
`;

export const ErrorMsg = styled.p`
  color: red;
  margin-bottom: 10px;
`;

export const Span = styled.span`
  font-size: 1rem;
  margin-top: 20px;
  color: white;
`;

export const FormLink = styled(Link)`
  text-decoration: none;
  color: ${colors.primary};
`;

export const Title = styled.h1`
  color: white;
  font-weight: 400;
  font-size: 2.5rem;
  margin-bottom: 20px;
`;
