import { useState, useRef } from "react";
// import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { StyledContainer } from "./Card.styles";

const CardList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<Array<HTMLDivElement>>([]);
  const divRef = useRef<HTMLDivElement | null>(null);
  const colors = useRef(["#666", "#555"]);
  const colorsList = colors.current;

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    const divElement = divRef.current;

    if (divElement && colorsList && colorsList.length > 0) {
      divElement.style.backgroundColor = colorsList[0];
    }

    // Rolar para o cartão ativo
    if (cardRefs.current[index]) {
      cardRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };

  return (
    <>
      {cardsData.map((card, index) => (
        <StyledContainer>
          <div
            ref={divRef}
            key={card.id}
            // ref={(el) => (cardRefs.current[index] = el as HTMLDivElement)}
            // raised={index === activeIndex}
          >
            <CardContent>
              <h2>{card.title}</h2>
              <p>{card.content}</p>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleCardClick(index)}
                disabled={index === activeIndex}
              >
                {index === activeIndex ? "Ativo" : "Selecionar"}
              </Button>
            </CardActions>
          </div>
        </StyledContainer>
      ))}
    </>
  );
};

export default CardList;

// Dados de exemplo para os cards
const cardsData = [
  {
    id: 1,
    title: "Card 1",
    content:
      "Este é o conteúdo do Card 1. Clique no botão abaixo para selecionar este card e exibir o próximo.",
  },
  {
    id: 2,
    title: "Card 2",
    content:
      "Este é o conteúdo do Card 2. Clique no botão abaixo para selecionar este card e exibir o próximo.",
  },
  {
    id: 3,
    title: "Card 3",
    content:
      "Este é o conteúdo do Card 3. Clique no botão abaixo para selecionar este card e exibir o próximo.",
  },
  {
    id: 1,
    title: "Card 1",
    content:
      "Este é o conteúdo do Card 1. Clique no botão abaixo para selecionar este card e exibir o próximo.",
  },
  {
    id: 2,
    title: "Card 2",
    content:
      "Este é o conteúdo do Card 2. Clique no botão abaixo para selecionar este card e exibir o próximo.",
  },
  {
    id: 3,
    title: "Card 3",
    content:
      "Este é o conteúdo do Card 3. Clique no botão abaixo para selecionar este card e exibir o próximo.",
  },
];
