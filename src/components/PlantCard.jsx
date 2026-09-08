import React from "react";

function PlantCard({ plant, onOutOfStock }) {
  const { id, name, image, price, isInStock = true } = plant;

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={() => onOutOfStock(id)}>
          In Stock
        </button>
      ) : (
        <button disabled>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
