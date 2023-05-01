import {
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Card as CardMUI } from "@material-ui/core";
import * as React from "react";
import styled from "styled-components";

export const StyledContainer = styled.div`
  cursor: pointer;
  min-width: 275px;
  margin-bottom: 32;
  position: "relative";
`;

export const Title = styled.h2`
  color: #fff;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Date = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

export const Description = styled.p`
  color: #fff;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

export const Action = styled.button`
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

export const StyledBullet = styled.span`
  display: "inline-block";
  margin: "0 2px";
  transform: "scale(0.8)";
`;

export interface IconProps {
  onPress: any;
  src: any;
  width: string;
  height: string;
}

export const CustomTypography = styled(Typography)``;

type TypographyProps = {
  pos?: boolean;
};

const StyledTypography = styled(Typography)<TypographyProps>(({ pos }) => ({
  fontSize: 14,
  marginBottom: pos ? 12 : 0,
}));

interface ICardProps {
  title: string;
  focused?: boolean;
  date: any;
  description: string;
  onNext: () => void;
  onClick: () => void;
  ref?: any;
}

export const Card = React.forwardRef<HTMLDivElement, ICardProps>(
  (props, ref) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      props.onNext();
    };
    const bull = <StyledBullet>•</StyledBullet>;

    return (
      <StyledContainer ref={ref} onClick={props.onClick}>
        <CardMUI raised={props.focused}>
          <CardContent>
            <StyledTypography color="textSecondary" gutterBottom>
              {props.title}
            </StyledTypography>
            <StyledTypography variant="h5">{props.date}</StyledTypography>
            <StyledTypography color="textSecondary">
              {props.description}
            </StyledTypography>
            <StyledTypography variant="body2">
              be{bull}nev{bull}o{bull}lent
              <br />
              {props.date}
            </StyledTypography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleClick}>
              Continuar
            </Button>
          </CardActions>
        </CardMUI>
      </StyledContainer>
    );
  }
);
