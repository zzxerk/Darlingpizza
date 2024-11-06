import React, { useState } from 'react';
import PizzaItem from './PizzaItem';
import PizzaModal from './PizzaModal';

const pizzaData = [
  {
    id: 1,
    name: 'Пепперони фреш',
    description: 'Пикантная пепперони , увеличенная порция моцареллы, томаты , фирменный томатный соус',
    sizes: { 25: 289, 30: 509, 35: 619 },
    // basePrice: "от 300",
    basePrice: 289,
    imageUrl: "https://media.dodostatic.net/image/r:1875x1875/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
  },
  {
    id: 2,
    name: 'Сырная',
    description: 'Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо',
    sizes: { 25: 319, 30: 509, 35: 659 },
    basePrice: 319,
    imageUrl: 'https://media.dodostatic.net/image/r:1875x1875/11EE7D610D2925109AB2E1C92CC5383C.avif',
  }, {
    id: 3,
    name: 'Двойной цыпленок',
    description: 'Цыпленок, моцарелла, фирменный соус альфредо',
    sizes: { 25: 349, 30: 559, 35: 709 },
    // basePrice: "от 300",
    basePrice: 349,
    imageUrl: "https://media.dodostatic.net/image/r:1875x1875/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
  }, {
    id: 4,
    name: 'Ветчина и сыр',
    description: 'Ветчина , моцарелла, фирменный соус альфредо',
    sizes: { 25: 349, 30: 549, 35: 689 },
    // basePrice: "от 300",
    basePrice: 349,
    imageUrl: "https://media.dodostatic.net/image/r:1875x1875/11EE7D60FDA22358AC33C6A44EB093A2.avif",
  },
];

function PizzaCatalog({ addToCart }) {
  const [selectedPizza, setSelectedPizza] = useState(null);

  return (
    <div className='main'>
      <div className="container">
        <div className="herro">
          <span className='herro-title'>Теперь с бесплатной доставкой</span>
          <img className='herro-img' src="https://media.dodostatic.net/image/r:1280x1280/11EE7D616B6EAC0D9D1151039F788394.avif" alt="" />
        </div>
        <span className='catalog-type-title' id='pizza'>Пиццы</span>
        <div>
          <div className="catalog-type-cont">
            {pizzaData.map((pizza) => (
              <PizzaItem
                key={pizza.id}
                pizza={pizza}
                onSelect={() => setSelectedPizza(pizza)}
              />
            ))}
          </div>
        </div>
        {selectedPizza && (
          <PizzaModal
            pizza={selectedPizza}
            onClose={() => setSelectedPizza(null)}
            addToCart={addToCart}
          />
        )}
      </div>
    </div>
  );
}

export default PizzaCatalog;
