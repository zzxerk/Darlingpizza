import React, { useState } from 'react';
import CartItem from './CartItem';
import AddressModal from './AddressModal';

function Cart({ items, onClose, removeFromCart, updateQuantity }) {
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [promoCode, setPromoCode] = useState(''); // State to store the promo code

  const handleOpenAddressModal = () => {
    if (items.length > 0) {
      setIsAddressModalOpen(true);
    }
  };

  const handleCloseAddressModal = () => {
    setIsAddressModalOpen(false);
  };

  const handleConfirmAddress = (address) => {
    console.log('Address confirmed:', address); // Send data to the database here
    setIsAddressModalOpen(false); // Close the modal after confirming the address
  };

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  const calculateTotalPrice = () => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return promoCode === 'FAMILY50' ? total * 0.5: total; // Apply 50% discount if promo code matches
  };

  // const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

   const totalPrice = calculateTotalPrice();

  return (
    <div className="modal">
      <div className="container">
        <div className="modal-body">
          <button className='cart-modal-close' onClick={onClose}>×</button>
          <span className='cart-title'>Корзина</span>
          <div className="cart-inner">
            {items.length === 0 ? (
              <div className="cart-empty">
                <img className='cart-empty-img' src="https://em-content.zobj.net/source/apple/391/pensive-face_1f614.png" alt="" />
                <p>Ваша корзина пуста</p>
              </div>
            ) : (
              items.map((item) => (
                <CartItem
                  key={`${item.id}-${item.size}`}
                  item={item}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                />
              ))
            )}
          </div>
          <input
            className='cart-promo'
            type="text"
            placeholder='Промокод'
            name='promo'
            value={promoCode}
            onChange={handlePromoCodeChange}
          />
          <div className="cart-itog-body">
            <p>Сумма заказа</p>
            <p>{totalPrice} ₽</p>
          </div>
          <button 
            className='cart-main-btn' 
            onClick={handleOpenAddressModal} 
            disabled={items.length === 0} // Disable if cart is empty
          >
            К оформлению заказа
          </button>

          {/* Address Modal */}
          {isAddressModalOpen && (
            <AddressModal
              onClose={handleCloseAddressModal}
              onConfirm={handleConfirmAddress}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;

// 568