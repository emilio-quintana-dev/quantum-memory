import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  margin: 10px;
`;

export const CardWrapper = styled.ul`
  list-style-type: none;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardItem = styled.li`
  font-size: 1rem;
  font-weight: 300;
  width: 50%;
  margin-bottom: 12.5px;
  background: ${colors.primary};
  border-radius: 3px;
  color: ${colors.background};
  padding: 0.5em 1em;
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: #2ca06c 0px 6px 0px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled.button``;
