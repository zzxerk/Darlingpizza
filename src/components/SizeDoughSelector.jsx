import React from 'react';

function SizeDoughSelector({ sizes, selectedSize, onSizeChange, doughTypes, selectedDough, onDoughChange }) {
  return (
    <div className="modal-item-options">
      <div className="dough-options">
        {doughTypes.map(dough => (
          <button
            key={dough}
            className={selectedDough === dough ? "active" : ""}
            onClick={() => onDoughChange(dough)}
          >
            {dough === "traditional" ? "Традиционное" : "Тонкое"}
          </button>
        ))}
      </div>
      <div className="size-options">
        {Object.keys(sizes).map(size => (
          <button
            key={size}
            className={selectedSize === +size ? "active" : ""}
            onClick={() => onSizeChange(+size)}
          >
            {size} см
          </button>
        ))}
      </div>
    </div>
  );
}

export default SizeDoughSelector;
