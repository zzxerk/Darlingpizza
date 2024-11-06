import React, { useState } from 'react';

function PizzaModal({ pizza, onClose, addToCart }) {
  const [size, setSize] = useState(30); // по умолчанию 30 см
  const [doughType, setDoughType] = useState("traditional"); // по умолчанию традиционное тесто
  const [price, setPrice] = useState(pizza.sizes[30]); // базовая цена

  const handleAddToCart = () => {
    addToCart({ ...pizza, size, price });
    onClose();
  };

  const handleSizeChange = (newSize) => {
    setSize(newSize);
    setPrice(pizza.sizes[newSize]); // обновляем цену в зависимости от выбранного размера
  };

  const handleDoughChange = (newDough) => {
    setDoughType(newDough);
  };


  return (
    <div className="modal">
      <div className="conatiner">
        <div className="modal-body">
          <button className='cart-modal-close' onClick={onClose}>×</button>
          <div className="piz-modal-img-box">
            <img className='piz-img' src={pizza.imageUrl} alt={pizza.name} />
          </div>
          <span className='modal-item-name'>{pizza.name}</span>
          <p className='modal-item-text'>{pizza.description}</p>
          <div className='modal-item-options'>
            <div className="dough-options">
              <button 
                className={doughType === "traditional" ? "active" : ""}
                onClick={() => handleDoughChange("traditional")}
              >
                Традиционное
              </button>
            </div>
            <div className="size-options">
              {Object.keys(pizza.sizes).map(s => (
              <button 
                key={s} 
                className={size === +s ? "active" : ""}
                onClick={() => handleSizeChange(+s)}
              >
                {s} см
              </button>
            ))}
            </div>
          </div>
          <button className="add-to-cart-button" onClick={handleAddToCart}>В корзину за {price} ₽</button>
        </div>
      </div>
    </div>
  );
}

export default PizzaModal;
