import React, { useState } from 'react';
import PizzaItem from './PizzaItem';
import PizzaModal from './PizzaModal';
import SnackItem from './SnackItem';
import SnackModal from './SnackModal';
import DrinkItem from './DrinkItem';
import DrinkModal from './DrinkModal';


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
    category: "pizza",
    prefix: "см"
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
    category: "pizza",
    prefix: "см"
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
    category: "pizza",
    prefix: "см"
  },
  {
    id: 4,
    name: "Ветчина и сыр",
    description: "Ветчина, моцарелла, фирменный соус альфредо",
    imageUrl: "https://media.dodostatic.net/image/r:1875x1875/11EE7D60FDA22358AC33C6A44EB093A2.avif",
    sizes: { 25: 349, 30: 549, 35: 689 },
    basePrice: 349,
    defaultDoughType: "traditional",
    availableDoughTypes: ["traditional", "tonkoe"],
    category: "pizza",
    prefix: "см"
  },
  {
    id: 5,
    name: "Чоризо фреш",
    description: "Острые колбаски чоризо, сладкий перец, моцарелла, фирменный томатный соус",
    imageUrl: "https://media.dodostatic.net/image/r:1875x1875/11EE7D61706D472F9A5D71EB94149304.avif",
    sizes: { 25: 299, 30: 469, 35: 589 },
    basePrice: 299,
    defaultDoughType: "traditional",
    availableDoughTypes: ["traditional", "tonkoe"],
    category: "pizza",
    prefix: "см"
  },
  {
    id: 6,
    name: "Жюльен",
    description: "Цыпленок, шампиньоны, ароматный грибной соус, красный лук, чеснок, моцарелла, смесь сыров чеддер и пармезан, фирменный соус альфредо",
    imageUrl: "https://media.dodostatic.net/image/r:1875x1875/11EE7D61758C90979BE0F53B4CEEE056.avif",
    sizes: { 25: 459, 30: 779, 35: 919 },
    basePrice: 459,
    defaultDoughType: "traditional",
    availableDoughTypes: ["traditional", "tonkoe"],
    category: "pizza",
    prefix: "см"
  },
  {
    id: 7,
    name: "Мясная",
    description: "Цыпленок, ветчина, пикантная пепперони, острые колбаски чоризо, моцарелла, фирменный томатный соус",
    imageUrl: "https://media.dodostatic.net/image/r:1875x1875/11EE7D6108E3A1C9952CD3A7F39A4D02.avif",
    sizes: { 25: 499, 30: 769, 35: 889 },
    basePrice: 499,
    defaultDoughType: "traditional",
    availableDoughTypes: ["traditional", "tonkoe"],
    category: "pizza",
    prefix: "см"
  },
  {
    id: 8,
    name: "Бургер-пицца",
    description: "Ветчина, маринованные огурчики, томаты, красный лук, чеснок, соус бургер, моцарелла, фирменный томатный соус",
    imageUrl: "https://media.dodostatic.net/image/r:1875x1875/11EE7D61698827EE9B8DB6D0AEC53410.avif",
    sizes: { 25: 469, 30: 679, 35: 839 },
    basePrice: 469,
    defaultDoughType: "traditional",
    availableDoughTypes: ["traditional", "tonkoe"],
    category: "pizza",
    prefix: "см"
  },
  {
    id: 9,
    name: "Сырный цыпленок",
    description: "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, фирменный соус альфредо, чеснок ",
    imageUrl: "https://media.dodostatic.net/image/r:1875x1875/11EE7D610E8BBB248F31270BE742B4BD.avif",
    sizes: { 25: 459, 30: 769, 35: 949 },
    basePrice: 459,
    defaultDoughType: "traditional",
    availableDoughTypes: ["traditional", "tonkoe"],
    category: "pizza",
    prefix: "см"
  },
  {
    id: 10,
    name: "Пепперони",
    description: "Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, фирменный соус альфредо, чеснок ",
    imageUrl: "https://media.dodostatic.net/image/r:1875x1875/11EE7D610A62D78598406363A9A8AD65.avif",
    sizes: { 25: 429, 30: 679, 35: 839 },
    basePrice: 429,
    defaultDoughType: "traditional",
    availableDoughTypes: ["traditional", "tonkoe"],
    category: "pizza",
    prefix: "см"
  },
  {
    id: 11,
    name: "Гавайская",
    description: "Цыпленок, ананасы, моцарелла, фирменный соус альфредо ",
    imageUrl: "https://media.dodostatic.net/image/r:1875x1875/11EE7D617E9339CFB185921A343AD8FD.avif",
    sizes: { 25: 469, 30: 769, 35: 899 },
    basePrice: 469,
    defaultDoughType: "traditional",
    availableDoughTypes: ["traditional", "tonkoe"],
    category: "pizza",
    prefix: "см"
  },
  {
    id: 12,
    name: "Ветчина и грибы",
    description: "Ветчина, шампиньоны, увеличенная порция моцареллы, фирменный томатный соус ",
    imageUrl: "https://media.dodostatic.net/image/r:1875x1875/11EF5B10B39BBBBDA9F8C4E4FF1B067C.avif",
    sizes: { 25: 439, 30: 679, 35: 869 },
    basePrice: 439,
    defaultDoughType: "traditional",
    availableDoughTypes: ["traditional", "tonkoe"],
    category: "pizza",
    prefix: "см"
  },
  {
    id: 13,
    name: "Цыпленок барбекю",
    description: "Цыпленок, бекон, соус барбекю, красный лук, моцарелла, фирменный томатный соус",
    imageUrl: "https://media.dodostatic.net/image/r:1875x1875/11EE7D6110059795842D40396BCF1E73.avif",
    sizes: { 25: 489, 30: 859, 35: 989 },
    basePrice: 489,
    defaultDoughType: "traditional",
    availableDoughTypes: ["traditional", "tonkoe"],
    category: "pizza",
    prefix: "см"
  },
  {
    id: 14,
    name: "Цыпленок ранч",
    description: "Цыпленок, ветчина, соус ранч, моцарелла, томаты, чеснок ",
    imageUrl: "https://media.dodostatic.net/image/r:1875x1875/11EE7D610BBEB562BD4D48786AD87270.avif",
    sizes: { 25: 629, 30: 919, 35: 1129 },
    basePrice: 629,
    defaultDoughType: "traditional",
    availableDoughTypes: ["traditional", "tonkoe"],
    category: "pizza",
    prefix: "см"
  },
  {
    id: 15,
    name: "Маргарита",
    description: "Увеличенная порция моцареллы, томаты, итальянские травы, фирменный томатный соус",
    imageUrl: "https://media.dodostatic.net/image/r:1875x1875/11EE7D6105EF6690B86FBDE6150B5B0C.avif",
    sizes: { 25: 469, 30: 699, 35: 869 },
    basePrice: 469,
    defaultDoughType: "traditional",
    availableDoughTypes: ["traditional", "tonkoe"],
    category: "pizza",
    prefix: "см"
  },
  {
    id: 16,
    name: "Колбаски барбекю",
    description: "Острые колбаски чоризо, соус барбекю, томаты, красный лук, моцарелла, фирменный томатный соус",
    imageUrl: "https://media.dodostatic.net/image/r:1875x1875/11EE7D6150D498419E133DF19945A00D.avif",
    sizes: { 25: 489, 30: 639, 35: 839 },
    basePrice: 489,
    defaultDoughType: "traditional",
    availableDoughTypes: ["traditional", "tonkoe"],
    category: "pizza",
    prefix: "см"
  },
];

const snacks = [
  { 
    id: 17, 
    name: 'Куриные наггетсы', 
    description: 'Нежное куриное мясо в хрустящей панировке', 
    sizes: { 4: 89, 8: 169}, 
    basePrice: 89,
    defaultDoughType: "",
    availableDoughTypes: [],
    imageUrl: 'https://media.dodostatic.net/image/r:1875x1875/11EEF45EACC4D7EABC10E0A0E0C2C67A.avif', 
    category: "snack",
    prefix: "шт"
  },
  { 
    id: 18, 
    name: 'Куриные кусочки', 
    description: 'Сочные кусочки цельного куриного филе с золотистой корочкой', 
    sizes: {4: 89, 8: 169}, 
    basePrice: 89,
    defaultDoughType: "",
    availableDoughTypes: [],
    imageUrl: 'https://media.dodostatic.net/image/r:1875x1875/11EE7D61B9521D369D61228456C8F6C9.avif', 
    category: "snack",
    prefix: "шт"
  },
  { 
    id: 19, 
    name: 'Куриные крылья барбекю', 
    description: 'Куриные крылышки со специями и ароматом копчения', 
    sizes: {4: 169, 8: 289}, 
    basePrice: 169,
    defaultDoughType: "",
    availableDoughTypes: [],
    imageUrl: 'https://media.dodostatic.net/image/r:1875x1875/11EE8936F8E4BBBBB02EE89E2A39A9E6.avif', 
    category: "snack",
    prefix: "шт"
  },
];

const drinks = [
  { 
    id: 20, 
    name: 'Добрый Кола', 
    description: '0.5 л', 
    sizes: {0.5: 129}, 
    basePrice: 129,
    defaultDoughType: "",
    availableDoughTypes: [],
    imageUrl: 'https://media.dodostatic.net/image/r:1875x1875/11EE7D61823BE0D3A35B4ABF658FD06B.avif', 
    category: "drink",
    prefix: "л"
  },
  { 
    id: 21, 
    name: 'Добрый Кола без сахара', 
    description: '0.5 л', 
    sizes: {0.5: 129}, 
    basePrice: 129,
    defaultDoughType: "",
    availableDoughTypes: [],
    imageUrl: 'https://media.dodostatic.net/image/r:1875x1875/11EE7D618298DE6D80D47869D156CC28.avif', 
    category: "drink",
    prefix: "л"
  },
  { 
    id: 22, 
    name: 'Добрый Лимон-Лайм', 
    description: '0.5 л', 
    sizes: {0.5: 129}, 
    basePrice: 129,
    defaultDoughType: "",
    availableDoughTypes: [],
    imageUrl: 'https://media.dodostatic.net/image/r:1875x1875/11EE7D61BAB86255A811FEEA677AD674.avif', 
    category: "drink",
    prefix: "л"
  },
  { 
    id: 23, 
    name: 'Rich Tea Черный с лимоном', 
    description: '0.5 л', 
    sizes: {0.5: 129}, 
    basePrice: 129,
    defaultDoughType: "",
    availableDoughTypes: [],
    imageUrl: 'https://media.dodostatic.net/image/r:1875x1875/11EE7D61AD5C2FCFBBBB6AA525E38A04.avif', 
    category: "drink",
    prefix: "л"
  },
  { 
    id: 24, 
    name: 'Rich Tea Зеленый', 
    description: '0.5 л', 
    sizes: {0.5: 129}, 
    basePrice: 129,
    defaultDoughType: "",
    availableDoughTypes: [],
    imageUrl: 'https://media.dodostatic.net/image/r:1875x1875/11EE7D61AB1F976991362A5A42A2613E.avif', 
    category: "drink",
    prefix: "л"
  },
  { 
    id: 25, 
    name: 'Вода BonaAqua негазированная', 
    description: '0.5 л', 
    sizes: {0.5: 79}, 
    basePrice: 79,
    defaultDoughType: "",
    availableDoughTypes: [],
    imageUrl: 'https://media.dodostatic.net/image/r:1875x1875/11EEE20B3F64A6B8A0418FF967C69F72.avif', 
    category: "drink",
    prefix: "л"
  },
];

function PizzaCatalog({ addToCart }) {
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [selectedSnacks, setSelectedSnacks] = useState(null);
  const [selectedDrinks, setSelectedDrinks] = useState(null);

  return (
    <div className='main'>
      <div className="container">
        <div className="herro">
          <span className='herro-title'>Теперь с бесплатной доставкой</span>
          <img className='herro-img' src="https://media.dodostatic.net/image/r:1280x1280/11EE7D616B6EAC0D9D1151039F788394.avif" alt="" />
        </div>
        <div className="catalog">

          <div className="catalog-box">
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
          <div className="catalog-box">
            <span className='catalog-type-title' id='snack'>Закуски</span>
            <div>
              <div className="catalog-type-cont">
                {snacks.map((snack) => (
                  <SnackItem
                    key={snack.id}
                    snack={snack}
                    onSelect={() => setSelectedSnacks(snack)}
                  />
                ))}
              </div>
            </div>
            {selectedSnacks && (
              <SnackModal
                snack={selectedSnacks}
                onClose={() => setSelectedSnacks(null)}
                addToCart={addToCart}
              />
            )}
          </div>
          <div className="catalog-box">
            <span className='catalog-type-title' id='snack'>Напитки</span>
            <div>
              <div className="catalog-type-cont">
                {drinks.map((drink) => (
                  <DrinkItem
                    key={drink.id}
                    drink={drink}
                    onSelect={() => setSelectedDrinks(drink)}
                  />
                ))}
              </div>
            </div>
            {selectedDrinks && (
              <DrinkModal
                drink={selectedDrinks}
                onClose={() => setSelectedDrinks(null)}
                addToCart={addToCart}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PizzaCatalog;
