import React from 'react';

const PaymentModal = ({totalPrice}) => {

  return (
    <div className="payment-modal">
      <div className="payment-container">
        <div className="payment-body">
          {/* <button className="cart-modal-close" onClick={onClose}>×</button> */}
            <p>{totalPrice}</p>
          {/* Add payment form or details here */}
          <button className="confirm-payment-button">Оплатить</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
