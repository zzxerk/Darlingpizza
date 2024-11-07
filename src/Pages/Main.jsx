import React, { useState } from 'react';
import PizzaCatalog from '../components/PizzaCatalog';
import Cart from '../components/Cart';

function Main() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (pizza) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === pizza.id && item.size === pizza.size);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === pizza.id && item.size === pizza.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...pizza, quantity: 1 }];
    });
  };

  const removeFromCart = (id, size) => {
    setCartItems((prevItems) =>
      prevItems.filter(item => !(item.id === id && item.size === size))
    );
  };

  const updateQuantity = (id, size, amount) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.id === id && item.size === size
          ? { ...item, quantity: item.quantity + amount }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  return (
    <div>
      <header>
        <div className="container">
          <div className="header-top">
            <a href='https://darlingpizza.vercel.app/' className='logo-link'>Darling pizza</a>
            <button className='cart-btn' onClick={() => setIsCartOpen(true)}><img className='icon-img' src="cart.png" alt=""/>Корзина</button>
          </div>
          <div className="header-btm">
                    <div className="header-btm-body">
                        <a className="header-btm-a" href="#pizza">Пиццы</a>
                        <a className="header-btm-a" href="#">Завтраки</a>
                        <a className="header-btm-a" href="#">Десерты</a>
                        <a className="header-btm-a" href="#">Напитки</a>
                        <a className="header-btm-a" href="#">Соусы</a>
                    </div>
            </div>
        </div>
      </header>
      <PizzaCatalog addToCart={addToCart} />
      {isCartOpen && (
        <Cart
          items={cartItems}
          onClose={() => setIsCartOpen(false)}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      )}
    </div>
  );
}

export default Main;
