import React, { useState } from 'react';

const CvcInput = () => {
  const [cvc, setCvc] = useState('');

  const handleChange = (e) => {
    // Allow only up to 3 digits
    const value = e.target.value.replace(/\D/g, '').slice(0, 3);
    setCvc(value);
  };

  return (
    <div className="cvc-input-container">
      <input
        type="password"
        id="cvc"
        value={cvc}
        onChange={handleChange}
        maxLength="3" // Limit to 3 digits
        className="cvc-input"
        placeholder
        required
      />
      <label htmlFor="cvc" className="cvc-label">CVC/CVV</label>
    </div>
  );
};

export default CvcInput;
