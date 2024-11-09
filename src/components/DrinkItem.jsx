import React from 'react';

function DrinkItem({ drink, onSelect }) {
  return (
    <div className='catalog-item-box' onClick={onSelect}>
      <img className='catalog-item-img' src={drink.imageUrl} alt={drink.name} />
      <div className="catalog-item-info">
        <span className='catalog-item-name'>{drink.name}</span>
        <p className='catalog-item-text'>{drink.description}</p>
        <p className='catalog-item-price'>{drink.basePrice} ₽</p>
      </div>
    </div>
  );
}

export default DrinkItem;