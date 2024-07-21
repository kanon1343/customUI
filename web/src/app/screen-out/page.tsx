"use client";

import React, { useState } from "react";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Box } from "@kuma-ui/core";

const cardsData = [
  { id: 1, content: "Card 1" },
  { id: 2, content: "Card 2" },
  { id: 3, content: "Card 3" },
];

const slideOut = keyframes`
  0% {
    transform: translate(0, 0);
    opacity: 1;
  }
  100% {
    transform: translate(-100%, -100%);
    opacity: 0;
  }
`;

type CardProps = {
  isExiting: boolean;
};

const Card = styled.div<CardProps>`
  width: 200px;
  height: 300px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  position: absolute;
  transition: transform 0.5s, opacity 0.5s;

  ${({ isExiting }) =>
    isExiting &&
    css`
      animation: ${slideOut} 0.5s forwards;
    `}
`;

const Container = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
`;

const App: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const handleNextCard = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsExiting(false);
      setCurrentCard((prev) => (prev + 1) % cardsData.length);
    }, 500); // animation duration
  };

  return (
    <div>
      <Container>
        {cardsData.map((card, index) => (
          <Card
            key={card.id}
            isExiting={isExiting && index === currentCard}
            style={{ zIndex: cardsData.length - index }}
          >
            {index === currentCard && card.content}
          </Card>
        ))}
      </Container>
      <Button onClick={handleNextCard}>Next</Button>
      <Box animation={`${slideOut} 0.5s forwards`}>Text</Box>
    </div>
  );
};

export default App;
