import {
  Button,
  CardActions,
  CardContent,
  CardProps,
  Typography,
} from "@material-ui/core";
import { Card as CardMUI } from "@material-ui/core";
import * as React from "react";
import styled from "styled-components";

export const StyledCard = styled(CardMUI)<CardProps>(() => ({
  minWidth: "275px",
  marginBottom: 32,
  position: "relative",
}));

export const CardOverlay = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #ffffff91;
  z-index: 1;
`;

type TypographyProps = {
  pos?: boolean;
};

const StyledTypography = styled(Typography)<TypographyProps>(({ pos }) => ({
  fontSize: 14,
  marginBottom: pos ? 12 : 0,
}));

interface ICardProps {
  title: string;
  focused: boolean;
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

    return (
      <StyledCard raised={props.focused} ref={ref}>
        {!props.focused && <CardOverlay onClick={props.onClick} />}
        <CardContent>
          <StyledTypography color="textSecondary" gutterBottom>
            {props.title}
          </StyledTypography>
          <StyledTypography variant="h5">{props.date}</StyledTypography>
          <StyledTypography color="textSecondary">
            {props.description}
          </StyledTypography>
          <StyledTypography variant="body2">
            be*nev*o*lent
            <br />
            {props.date}
          </StyledTypography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClick}>
            Continuar
          </Button>
        </CardActions>
      </StyledCard>
    );
  }
);
