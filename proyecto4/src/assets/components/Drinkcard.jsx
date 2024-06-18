import React from "react";
import { Card, Button } from "react-bootstrap";

const truncateInstructions = (instructions) => {
  if (instructions.length > 100) {
    return `${instructions.substring(0, 100)}...`;
  }
  return instructions;
};

const DrinkCard = ({ drink }) => {
  return (
    <Card style={{ marginBottom: "20px" }}>
      <Card.Img variant="top" src={drink.strDrinkThumb} alt={drink.strDrink} />
      <Card.Body>
        <Card.Title>{drink.strDrink}</Card.Title>
        <Card.Text>{truncateInstructions(drink.strInstructions)}</Card.Text>
        <Button variant="primary">View Recipe</Button>
      </Card.Body>
    </Card>
  );
};

export default DrinkCard;
