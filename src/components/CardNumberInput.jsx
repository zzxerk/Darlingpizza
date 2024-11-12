import React, { useState } from 'react';

const CardNumberInput = () => {
  const [cardNumber, setCardNumber] = useState('');

  const formatCardNumber = (value) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, '');
    // Format with spaces every 4 digits
    const formattedNumber = digits.replace(/(\d{4})(?=\d)/g, '$1 ');
    return formattedNumber.trim();
  };

  const handleChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setCardNumber(formattedValue);
  };

  return (
    <div className="card-input-container">
      <input
        type="text"
        id="cardNumber"
        value={cardNumber}
        onChange={handleChange}
        maxLength="19" // Max length to allow spaces (16 digits + 3 spaces)
        className="card-input"
        placeholder
        required
      />
      <label htmlFor="cardNumber" className="card-label">Номер карты</label>
      <img src="path/to/mir-logo.png" alt="MIR" className="mir-logo" />
    </div>
  );
};

export default CardNumberInput;