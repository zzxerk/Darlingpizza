import React, { useState } from 'react';

function DrinkModal({ drink, onClose, addToCart }) {
  const [size, setSize] = useState(0.5); // default to 30 cm
  const [doughType, setDoughType] = useState(drink.defaultDoughType || "traditional"); // use default dough type from pizza data
  const [price, setPrice] = useState(drink.sizes[0.5]);

  const handleAddToCart = () => {
    addToCart({ ...drink, size, price, doughType });
    onClose();
  };

  const handleSizeChange = (newSize) => {
    setSize(newSize);
    setPrice(snack.sizes[newSize]); // update price based on selected size
  };

  const handleDoughChange = (newDough) => {
    setDoughType(newDough);
  };

  return (
    <div className="modal">
      <div className="container">
        <div className="modal-body">
          <button className="cart-modal-close" onClick={onClose}>×</button>
          <div className="piz-modal-img-box">
            <img className="piz-img" src={drink.imageUrl} alt={drink.name} />
          </div>
          <span className="modal-item-name">{drink.name}</span>
          <p className="modal-item-text">{drink.description}</p>
          <div className="modal-item-options">
            {/* <div className="dough-options">
              {snack.availableDoughTypes.includes("traditional") && (
                <button 
                  className={doughType === "traditional" ? "active" : ""}
                  onClick={() => handleDoughChange("traditional")}
                >
                  Традиционное
                </button>
              )}
              {snack.availableDoughTypes.includes("tonkoe") && (
                <button 
                  className={doughType === "tonkoe" ? "active" : ""}
                  onClick={() => handleDoughChange("tonkoe")}
                >
                  Тонкое
                </button>
              )}
            </div> */}
            <div className="size-options">
              {Object.keys(drink.sizes).map(s => (
                <button 
                  key={s} 
                  className={size === +s ? "active" : ""}
                  onClick={() => handleSizeChange(+s)}
                >
                  {s} л
                </button>
              ))}
            </div>
          </div>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            В корзину за {price} ₽
          </button>
        </div>
      </div>
    </div>
  );
}

export default DrinkModal;
