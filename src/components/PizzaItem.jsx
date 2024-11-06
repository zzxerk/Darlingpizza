import React from 'react';

function PizzaItem({ pizza, onSelect }) {
  return (
    <div className='catalog-item-box' onClick={onSelect}>
      <img className='catalog-item-img' src={pizza.imageUrl} alt={pizza.name} />
      <div className="catalog-item-info">
        <span className='catalog-item-name'>{pizza.name}</span>
        <p className='catalog-item-text'>{pizza.description}</p>
        <p className='catalog-item-price'>от {pizza.basePrice} ₽</p>
      </div>
    </div>
  );
}

export default PizzaItem;
