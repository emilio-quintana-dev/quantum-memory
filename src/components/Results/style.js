import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ResultsSection = styled.div`
  display: flex;
  width: 100%;
  min-height: 500px;
  align-items: center;
  text-align: center;
  margin-bottom: 75px;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 5rem;
`;

export const Column = styled.ul`
  list-style-type: none;
`;

export const Row = styled.li`
  font-size: 2rem;
  border: 3.33px solid ${colors.primary};
  border-radius: 5px;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 10px;
  color: white;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const Subtitle = styled.h3`
  font-size: 2rem;
  color: white;
`;

export const Button = styled.button`
  width: 25%;
  background: ${colors.primary};
  border-radius: 3px;
  color: ${colors.background};
  margin: 0 auto;
  padding: 0.5em 1em;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;
  box-shadow: #2ca06c 0px 6px 0px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
