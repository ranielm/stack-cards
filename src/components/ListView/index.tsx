import { useEffect, useRef, useState } from "react";
import { Card } from "../Card/";
import { v4 as uuidv4 } from "uuid";
import { StyledRoot, StyledContainer } from "../../App.styles";

export const getID = () => {
  let id = uuidv4();
  return id;
};

const ListView = () => {
  const date = new Date().toLocaleDateString();
  const getDescription = () => {
    let description =
      "Green apples have a high fiber content which helps in increasing the body's metabolism. ";
    return description;
  };
  const cardRefs = useRef<Array<HTMLDivElement>>([]);
  const [cardsRendered, setCardsRendered] = useState<Record<number, boolean>>({
    0: true,
  });
  const [cardFocused, setCardFocused] = useState<Record<number, boolean>>({
    0: true,
  });
  const [forFocus, setForFocus] = useState(0);

  const onNext = (index: number) => {
    const nextIndex = index + 1;
    setCardsRendered((state) => {
      return { ...state, [nextIndex]: true };
    });
    onClick(nextIndex);
  };

  useEffect(() => {
    setCardFocused((state) => {
      return { [forFocus]: true };
    });
    scrollToCard(cardRefs.current[forFocus]);
  }, [forFocus]);

  const onClick = (index: number) => {
    setForFocus(index);
    if (cardRefs.current[index]) {
      scrollToCard(cardRefs.current[index]);
    }
  };

  const scrollToCard = (element: HTMLDivElement) => {
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      element.style.alignItems = "center";
      element.style.justifyContent = "center";
    }
  };

  const cardsData = [
    {
      key: getID(),
      title: "Formulario 1",
      date: date,
      description: getDescription(),
    },
    {
      key: getID(),
      title: "Formulario 2",
      date: date,
      description: getDescription(),
    },
    {
      key: getID(),
      title: "Formulario 3",
      date: date,
      description: getDescription(),
    },
    {
      key: getID(),
      title: "Formulario 4",
      date: date,
      description: getDescription(),
    },
    {
      key: getID(),
      title: "Formulario 5",
      date: date,
      description: getDescription(),
    },
    {
      key: getID(),
      title: "Formulario 6",
      date: date,
      description: getDescription(),
    },
  ];

  return (
    <>
      {cardsData.map((card, index) => (
        <StyledRoot key={card.key}>
          {cardsRendered[index] && (
            <StyledContainer>
              <Card
                ref={(el: HTMLDivElement) => {
                  cardRefs.current[index] = el;
                }}
                key={card.key}
                title={card.title}
                date={card.date}
                description={card.description}
                onNext={() => {
                  onNext(index);
                }}
                onClick={() => onClick(index)}
                focused={cardFocused[index]}
              />
            </StyledContainer>
          )}
        </StyledRoot>
      ))}
    </>
  );
};

export default ListView;
