import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.label`
  color: #fff;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  background: ${colors.secondary};
  border: none;
  color: ${colors.primary};
  padding: 7px 5px;
  margin-bottom: 13px;
  border: solid 1px grey;
  border-radius: 5px;
  font-size: 1.2rem;

  &:focus {
    outline: none;
    transition: all 0.2s ease-out;
    border: 3px solid;
    border-color: ${colors.primary};
  }
`;
