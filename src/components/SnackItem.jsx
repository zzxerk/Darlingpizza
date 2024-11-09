import React from 'react';

function SnackItem({ snack, onSelect }) {
  return (
    <div className='catalog-item-box' onClick={onSelect}>
      <img className='catalog-item-img' src={snack.imageUrl} alt={snack.name} />
      <div className="catalog-item-info">
        <span className='catalog-item-name'>{snack.name}</span>
        <p className='catalog-item-text'>{snack.description}</p>
        <p className='catalog-item-price'>от {snack.basePrice} ₽</p>
      </div>
    </div>
  );
}

export default SnackItem;