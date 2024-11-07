import React, { useState } from 'react';
import PizzaItem from './PizzaItem';
import PizzaModal from './PizzaModal';

const pizzaData = [
  {
    id: 1,
    name: "Пепперони фреш",
    description: "Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус",
    imageUrl: "https://media.dodostatic.net/image/r:1875x1875/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
    sizes: { 25: 289, 30: 509, 35: 619 },
    basePrice: 289,
    defaultDoughType: "traditional",
    availableDoughTypes: ["traditional", "tonkoe"],
    category: "pizza"
  },
  {
    id: 2,
    name: "Сырная",
    description: "Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо",
    imageUrl: "https://media.dodostatic.net/image/r:1875x1875/11EE7D610D2925109AB2E1C92CC5383C.avif",
    sizes: { 25: 319, 30: 509, 35: 659 },
    basePrice: 319,
    defaultDoughType: "traditional",
    availableDoughTypes: ["traditional", "tonkoe"],
    category: "pizza"
  },
  {
    id: 3,
    name: "Двойной цыпленок",
    description: "Цыпленок, моцарелла, фирменный соус альфредо",
    imageUrl: "https://media.dodostatic.net/image/r:1875x1875/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
    sizes: { 25: 349, 30: 559, 35: 709 },
    basePrice: 349,
    defaultDoughType: "traditional",
    availableDoughTypes: ["traditional", "tonkoe"],
    category: "pizza"
  },
  // Add more pizzas
];

const snacks = [
  { 
    id: 3, 
    name: 'Куриные наггетсы', 
    description: 'Хрустящие золотистые наггетсы', 
    quantities: { 6: 150, 9: 200, 12: 250 }, 
    image: 'nuggets.png', 
    category: "snack" 
  },
  { 
    id: 4, 
    name: 'Картофель фри', 
    description: 'Золотистый картофель фри', 
    quantities: { 100: 80, 150: 100, 200: 130 }, 
    image: 'fries.png', 
    category: "snack" 
  }
];

const drinks = [
  {
    id: 5,
    name: 'Кока-Кола',
    description: 'Газированный напиток',
    price: 50,
    image: 'cola.png',
    category: "drink"
  },
  {
    id: 6,
    name: 'Сок Апельсиновый',
    description: 'Свежий сок',
    price: 70,
    image: 'orange-juice.png',
    category: "drink"
  }
];


// const pizzaData = [
//   {
//     id: 1,
//     name: 'Пепперони фреш',
//     description: 'Пикантная пепперони , увеличенная порция моцареллы, томаты , фирменный томатный соус',
//     sizes: { 25: 289, 30: 509, 35: 619 },
//     // basePrice: "от 300",
//     basePrice: 289,
//     imageUrl: "https://media.dodostatic.net/image/r:1875x1875/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
//   },
// ];

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
