import React from 'react';
import CardNumberInput from './CardNumberInput';
import CardDateInput from './CardDateInput'
import CvcInput from './CvcInput'

const PaymentModal = ({totalPrice}) => {

  return (
    <div className="payment-modal">
      <div className="payment-container">
        <div className="pay-header">
          <div className="pay-logo">
            <img src="https://securecardpayment.ru/payment/merchants/sbersafe_sberid/static/media/sberbank-logo-color.b918eacf.svg" alt="" />
          </div>
        </div>
        <div className="pay-order">
          <div className="order-info">
            <p className='order-title'>DARLING-PIZZA</p>
            <div className="order-price-box">
              <div>
                {totalPrice}<span className='order-price-rub'> ₽</span> 
              </div>
            </div>
          </div>
          <div className="order-icon">
            <img src="https://securecardpayment.ru/payment/merchants/sbersafe_sberid/static/media/merchant-default-logo.396b6d56.svg" alt="" />
          </div>
        </div>
        <div className="message-body">
          <svg fill="#888" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="banner-icon">
            <path clip-rule="evenodd" d="M20.6667 12C20.6667 16.7864 16.7864 20.6667 12 20.6667C7.21367 20.6667 3.33337 16.7864 3.33337 12C3.33337 7.21364 7.21367 3.33334 12 3.33334C16.7864 3.33334 20.6667 7.21364 20.6667 12ZM19.3334 12C19.3334 7.95002 16.05 4.66668 12 4.66668C7.95005 4.66668 4.66671 7.95002 4.66671 12C4.66671 16.05 7.95005 19.3333 12 19.3333C16.05 19.3333 19.3334 16.05 19.3334 12ZM11.3334 14.6667H10.6667C10.2985 14.6667 10 14.9652 10 15.3333C10 15.7015 10.2985 16 10.6667 16H13.3334C13.7016 16 14 15.7015 14 15.3333C14 14.9652 13.7016 14.6667 13.3334 14.6667H12.6667V11.3333C12.6667 10.9652 12.3682 10.6667 12 10.6667H10.6667C10.2985 10.6667 10 10.9652 10 11.3333C10 11.7015 10.2985 12 10.6667 12H11.3334V14.6667ZM11.3334 8.66668V9.33334C11.3334 9.70153 11.6319 10 12 10C12.3682 10 12.6667 9.70153 12.6667 9.33334V8.66668C12.6667 8.29849 12.3682 8.00001 12 8.00001C11.6319 8.00001 11.3334 8.29849 11.3334 8.66668Z"></path>
          </svg>
          <p className='message-text'>Для стабильной работы скоро потребуются сертификаты Минцифры</p>
        </div>
        <div className="pay-title">Способ оплаты</div>
        <div className="label-body">
          <div className="label-line"></div>
          <div className="label-text">По карте</div>
          <div className="label-line"></div>
        </div>
        <div className="pay-body">
          <div className="pay-body-inner">
            <div className="pay-inner-title">Введите данные карты</div>
            <div className="card-num-box">
              <CardNumberInput />
            </div>
            <div className="card-smal-box">
              <CardDateInput />
            </div>
            <div className="card-smal-box">
              <CvcInput/>
            </div>
          </div>
          <button className="confirm-payment-button">Оплатить</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
