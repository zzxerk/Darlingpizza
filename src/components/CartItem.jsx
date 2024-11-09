import React from 'react';

function CartItem({ item, removeFromCart, updateQuantity }) {
  return (
    <div className='cart-box'>
      <div className="cart-box-info">
        <img className='cart-box-img' src={item.imageUrl} alt={item.name}/>
        <div className="cart-box-text">
          <span className='cart-item-name'>{item.name}</span>
          {/* <span className='cart-item-size'>{item.size}, {item.doughType === "traditional" ? "традиционное" : "тонкое"} тесто</span> */}
          <span className='cart-item-size'>{item.size} {item.prefix}</span>
        </div>
      </div>
      <div className="cart-item-count">
        <p className='cart-item-price'>{item.price} ₽</p>
        <div className='cart-item-del'>
          <div className="cart-count">
            <button className='cart-count-btns' onClick={() => updateQuantity(item.id, item.size, -1)}>-</button>
            <p className='cart-item-qantity'>{item.quantity}</p>
            <button className='cart-count-btns' onClick={() => updateQuantity(item.id, item.size, 1)}>+</button>
          </div>
          <button className='cart-item-delete' onClick={() => removeFromCart(item.id, item.size)}><img className='icon-img' src='trash.png'></img></button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
