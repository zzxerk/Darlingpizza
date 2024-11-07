import React from 'react';

function QuantitySelector({ quantities, selectedQuantity, onQuantityChange }) {
  return (
    <div className="quantity-options">
      {Object.keys(quantities).map(quantity => (
        <button
          key={quantity}
          className={selectedQuantity === +quantity ? "active" : ""}
          onClick={() => onQuantityChange(+quantity)}
        >
          {quantity} шт
        </button>
      ))}
    </div>
  );
}

export default QuantitySelector;
