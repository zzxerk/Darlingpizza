import React, { useState } from 'react';

function SnackModal({ snack, onClose, addToCart }) {
  const [size, setSize] = useState(4); // default to 30 cm
  const [doughType, setDoughType] = useState(snack.defaultDoughType || "traditional"); // use default dough type from pizza data
  const [price, setPrice] = useState(snack.sizes[4]); // base price for 30 cm

  const handleAddToCart = () => {
    addToCart({ ...snack, size, price, doughType });
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
            <img className="piz-img" src={snack.imageUrl} alt={snack.name} />
          </div>
          <span className="modal-item-name">{snack.name}</span>
          <p className="modal-item-text">{snack.description}</p>
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
              {Object.keys(snack.sizes).map(s => (
                <button 
                  key={s} 
                  className={size === +s ? "active" : ""}
                  onClick={() => handleSizeChange(+s)}
                >
                  {s} шт
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

export default SnackModal;
