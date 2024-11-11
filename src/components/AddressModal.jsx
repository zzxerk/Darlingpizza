import React, { useState } from 'react';

const AddressModal = ({ onClose, onConfirm }) => {
  const [address, setAddress] = useState({
    city: '',
    entrance: '',
    doorCode: '',
    floor: '',
    apartment: '',
    comment: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); // Clear error when input changes
  };

  const validateFields = () => {
    const newErrors = {};
    if (!address.city) newErrors.city = 'Введите данные';
    if (!address.entrance) newErrors.entrance = 'Введите номер подъезда';
    if (!address.floor) newErrors.floor = 'Введите этаж';
    if (!address.apartment) newErrors.apartment = 'Введите номер квартиры';
    return newErrors;
  };

  const handleConfirm = () => {
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Show errors if validation fails
    } else {
      onConfirm(address); // Trigger parent function to open payment modal
      onClose(); // Close the address modal
    }
  };

  return (
    <div className="modal">
      <div className="container">
        <div className="modal-body">
          <button className="cart-modal-close" onClick={onClose}>×</button>
          <span className='cart-title'>Адрес доставки</span>
          <div className="adres-body">
            <input
              className='adres-input'
              type="text"
              name="city"
              placeholder="*Город, улица и дом"
              value={address.city}
              onChange={handleChange}
            />
            {errors.city && <p className="error">{errors.city}</p>}

            <input
              className='adres-input-short'
              type="number"
              name="entrance"
              placeholder="*Подъезд"
              value={address.entrance}
              onChange={handleChange}
            />
            <input
              className='adres-input-short'
              type="number"
              name="doorCode"
              placeholder="Код двери"
              value={address.doorCode}
              onChange={handleChange}
            />
            <input
              className='adres-input-short'
              type="number"
              name="floor"
              placeholder="*Этаж"
              value={address.floor}
              onChange={handleChange}
            />
            <input
              className='adres-input-short'
              type="number"
              name="apartment"
              placeholder="*Квартира"
              value={address.apartment}
              onChange={handleChange}
            />
            <input
              className='adres-input comment'
              name="comment"
              placeholder="Комментарий к адресу"
              value={address.comment}
              onChange={handleChange}
            />
          </div>
          <button className="add-to-cart-button" onClick={handleConfirm}>Сохранить</button>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;
