import styled from "styled-components";
import { colors } from "../../utils/colors";

export const LandingSection = styled.div`
  padding: 75px 0;
  margin-top: 75px;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    margin-top: 0px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  margin-bottom: 24px;
  font-size: 50px;
  line-height: 1.1;
  font-weight: 400;
`;

export const Subtitle = styled.h3`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 20px;
  line-height: 28px;
  font-weight: 400;
  color: #a9b3c1;
`;

export const Row = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row-start;
`;

export const Column = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: flex-end;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const Button = styled.button`
  background: ${colors.primary};
  border-radius: 3px;
  color: ${colors.background};
  margin: 0 auto;
  padding: 0.5em 2em;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;
  box-shadow: #2ca06c 0px 6px 0px;
`;
