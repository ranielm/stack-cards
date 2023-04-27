import { useRef } from "react";
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

  const handleButtonClick = (index: number) => {
    const nextIndex = index + 1;

    if (cardRefs.current[nextIndex]) {
      cardRefs.current[nextIndex].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
      cardRefs.current[nextIndex].style.alignItems = "center";
      cardRefs.current[nextIndex].style.justifyContent = "center";
    }
  };

  const cardsData = [
    {
      key: getID(),
      title: "Formulario 1",
      date: date,
      description: getDescription(),
      handleButtonClick: handleButtonClick,
    },
    {
      key: getID(),
      title: "Formulario 2",
      date: date,
      description: getDescription(),
      handleButtonClick: handleButtonClick,
    },
    {
      key: getID(),
      title: "Formulario 3",
      date: date,
      description: getDescription(),
      handleButtonClick: handleButtonClick,
    },
    {
      key: getID(),
      title: "Formulario 4",
      date: date,
      description: getDescription(),
      handleButtonClick: handleButtonClick,
    },
    {
      key: getID(),
      title: "Formulario 5",
      date: date,
      description: getDescription(),
      handleButtonClick: handleButtonClick,
    },
    {
      key: getID(),
      title: "Formulario 6",
      date: date,
      description: getDescription(),
      handleButtonClick: handleButtonClick,
    },
  ];

  return (
    <>
      {cardsData.map((card, index) => (
        <StyledRoot key={card.key}>
          <StyledContainer>
            <Card
              ref={(el) => (cardRefs.current[index] = el as HTMLDivElement)}
              key={card.key}
              title={card.title}
              date={card.date}
              description={card.description}
              handleButtonClick={() => handleButtonClick(index)}
            />
          </StyledContainer>
        </StyledRoot>
      ))}
    </>
  );
};

export default ListView;
