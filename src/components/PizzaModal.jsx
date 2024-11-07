import React, { useState } from 'react';

function PizzaModal({ pizza, onClose, addToCart }) {
  const [size, setSize] = useState(30); // default to 30 cm
  const [doughType, setDoughType] = useState(pizza.defaultDoughType || "traditional"); // use default dough type from pizza data
  const [price, setPrice] = useState(pizza.sizes[30]); // base price for 30 cm

  const handleAddToCart = () => {
    addToCart({ ...pizza, size, price, doughType });
    onClose();
  };

  const handleSizeChange = (newSize) => {
    setSize(newSize);
    setPrice(pizza.sizes[newSize]); // update price based on selected size
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
            <img className="piz-img" src={pizza.imageUrl} alt={pizza.name} />
          </div>
          <span className="modal-item-name">{pizza.name}</span>
          <p className="modal-item-text">{pizza.description}</p>
          <div className="modal-item-options">
            <div className="dough-options">
              {pizza.availableDoughTypes.includes("traditional") && (
                <button 
                  className={doughType === "traditional" ? "active" : ""}
                  onClick={() => handleDoughChange("traditional")}
                >
                  Традиционное
                </button>
              )}
              {pizza.availableDoughTypes.includes("tonkoe") && (
                <button 
                  className={doughType === "tonkoe" ? "active" : ""}
                  onClick={() => handleDoughChange("tonkoe")}
                >
                  Тонкое
                </button>
              )}
            </div>
            <div className="size-options">
              {Object.keys(pizza.sizes).map(s => (
                <button 
                  key={s} 
                  className={size === +s ? "active" : ""}
                  onClick={() => handleSizeChange(+s)}
                >
                  {s} 
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

export default PizzaModal;
