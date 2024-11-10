import React, { useState } from 'react';

const CardDateInput = () => {
  const [expirationDate, setExpirationDate] = useState('');

  const formatExpirationDate = (value) => {
    // Remove non-digit characters
    const digits = value.replace(/\D/g, '');
    let month = digits.substring(0, 2);
    const year = digits.substring(2, 4);

    // Cap the month at 12 if it's more than 12
    if (month.length === 2 && parseInt(month, 10) > 12) {
      month = '12';
    }

    // Return the formatted value in MM/YY format
    return month + (year ? '/' + year : '');
  };

  const handleChange = (e) => {
    const formattedValue = formatExpirationDate(e.target.value);
    setExpirationDate(formattedValue);
  };

  return (
    <div className="expiration-input-container">
      <label htmlFor="expirationDate" className="expiration-label">Месяц/Год</label>
      <input
        type="text"
        id="expirationDate"
        value={expirationDate}
        onChange={handleChange}
        maxLength="5" // Limit to MM/YY format
        className="expiration-input"
        placeholder="MM/YY"
      />
    </div>
  );
};

export default CardDateInput;
