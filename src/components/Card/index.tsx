import * as React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  border: ${(props) => `1px solid #1c8382`};
  padding: 25px 12px 18px;
  background: ${(props) => `linear-gradient(
    45deg, #181818, #380d17
  )`};
`;

const Title = styled.h2`
  color: #fff;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const Date = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const Description = styled.p`
  color: #fff;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

const Action = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
  :active {
    background: #380d17;
  }
`;

interface ICardProps {
  title: string;
  date: any;
  description: string;
  handleButtonClick: () => void;
  ref?: any;
}

export const Card = React.forwardRef<HTMLDivElement, ICardProps>(
  (props, ref) => {
    return (
      <StyledContainer ref={ref}>
        <Title>{props.title}</Title>
        <Date>{props.date}</Date>
        <Description>{props.description}</Description>
        <Action onClick={props.handleButtonClick}>Continuar</Action>
      </StyledContainer>
    );
  }
);
